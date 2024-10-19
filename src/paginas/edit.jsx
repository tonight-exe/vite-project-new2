import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePJ, getPJ } from '../api';
import img1 from '../componentes/img/guerrero.jpg';
import img2 from '../componentes/img/profeta.jpg';
import img3 from '../componentes/img/samurai.jpg';

const Edit = () => {
    const { id_pj } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ Name: '', id_Arma: '', id_Armadura: '', Age: '', img:img1 });

    useEffect(() => {
        const fetchPJ = async () => {
            const pjs = await getPJ();
            const pj = pjs.find(pj => pj.id_pj === parseInt(id_pj));
            if (pj) {
                setFormData({ Name: pj.Name, id_Arma: pj.id_Arma, id_Armadura: pj.id_Armadura, Age: pj.Age, img: pj.img  });
            }
        };
        fetchPJ();
    }, [id_pj]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleImageChange = (e) => {
        setFormData({ ...formData, img: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePJ(id_pj, formData);
            navigate('/');
        } catch (error) {
            console.error('Error updating character:', error);
        }
    };

    return (
        <div className="form-container">
         <form onSubmit={handleFormSubmit}>
            <input type="text" name="Name" value={formData.Name} onChange={handleFormChange} placeholder="Name" />
            <input type="text" name="id_Arma" value={formData.id_Arma} onChange={handleFormChange} placeholder="id_Arma" />
            <input type="text" name="id_Armadura" value={formData.id_Armadura} onChange={handleFormChange} placeholder="id_Armadura" />
            <input type="text" name="Age" value={formData.Age} onChange={handleFormChange} placeholder="Age" />
            <select name="img" value={formData.img} onChange={handleImageChange}>
                <option value={img1}>guerrero</option>
                <option value={img2}>profeta</option>
                <option value={img3}>samurai</option>
            </select>
            <button type="submit">Guardar</button>
        </form>
        </div>
    );
};

export default Edit;