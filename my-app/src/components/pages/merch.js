import React, { useState } from 'react';
import axios from 'axios';
import './merchstyles.css';

function Merch() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/add_merchandise', formData)
            .then(response => {
                console.log('Merchandise added successfully:', response.data);
                // Handle success, e.g., show a success message or reset the form
            })
            .catch(error => {
                console.error('Error adding merchandise:', error);
                // Handle error, e.g., show an error message to the user
            });
    };

    return (
        <div>
            <section className="bg-white text-dark p-0 p-lg-0 pt-lg-5 text-sm-start">
                {/* Your existing content */}
            </section>

            <section className="p-5">
                {/* Your existing content */}

                <h3>Use this to add more merchandise!</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                    <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                    <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
                    <button type="submit">Add Merchandise</button>
                </form>
            </section>

            {/* Your existing content */}
        </div>
    );
}

export default Merch;
