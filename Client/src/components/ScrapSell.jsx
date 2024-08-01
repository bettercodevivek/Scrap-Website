import React, { useState } from 'react';

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const itemsToSell = ["Electronics", "Furniture", "Clothing", "Toys", "Books"];

export default function ScrapSell() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        itemToSell: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sell Your Scrap</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select your location</option>
                        {locations.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="itemToSell" className="block text-gray-700 text-sm font-medium mb-2">What do you want to sell?</label>
                    <select
                        id="itemToSell"
                        name="itemToSell"
                        value={formData.itemToSell}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select an item</option>
                        {itemsToSell.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
