import React, { useState } from 'react';
import { createPJ } from '../api.jsx';
import { useNavigate } from 'react-router-dom';
import img1 from '../componentes/img/guerrero.jpg';
import img2 from '../componentes/img/profeta.jpg';
import img3 from '../componentes/img/samurai.jpg';
//crear nuevo personaje
export const VerArmas = () => {
    const [newPJ, setNewPJ] = useState({
        Name: '',
        id_Arma: '',
        id_Armadura: '',
        Age: '',
        img: img1,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPJ({
            ...newPJ,
            [name]: value,
        });
    };
    const handleImageChange = (e) => {
        setNewPJ({
            ...newPJ,
            img: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createPJ(newPJ);
        if (result) {
            alert('Personaje creado exitosamente');
            setNewPJ({
                Name: '',
                id_Arma: '',
                id_Armadura: '',
                Age: '',
                img: img1,
            });
        } else {
            alert('Error al crear el personaje');
        }
    };

    return (
        <div className='form-container2'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="Name" value={newPJ.Name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="id_Arma" value={newPJ.id_Arma} onChange={handleChange} placeholder="id_Arma" />
            <input type="text" name="id_Armadura" value={newPJ.id_Armadura} onChange={handleChange} placeholder="id_Armadura" />
            <input type="text" name="Age" value={newPJ.Age} onChange={handleChange} placeholder="Age" />
            <select name="img" value={newPJ.img} onChange={handleImageChange}>
                <option value={img1}>guerrero</option>
                <option value={img2}>profeta</option>
                <option value={img3}>samurai</option>
            </select>
            <button type="submit">Crear</button>
        </form>
        </div>
    );
};