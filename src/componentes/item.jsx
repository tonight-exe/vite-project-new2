import React from 'react';
const Items = ({ items }) => {
    return (
        <div>
            <h2>Objetos</h2>
            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.id}>
                        <p>Name: {item.Name}</p>
                        <p>Type: {item.Type}</p>
                        <img src={item.Image} alt={item.Name} />
                        <p>Value: {item.Value}</p>
                        <p>ID: {item.id}</p>
                    </div>
                ))
            ) : (
                <p>No hay objetos</p>
            )}
        </div>
    );
};
export default Items;
