//Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    const navigate = useNavigate();

    const [vehicles, setVehicles] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = (vehicle) => {
        navigate(`/bid/${vehicle.vin}`, { state: { vehicle } });
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api`)    
            .then(response => setVehicles(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    if (!vehicles) {
        return <div>Loading...</div>;
    }

    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.title.toLowerCase().includes(searchTerm) || vehicle.model?.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className="vehicleContainer flex flex-wrap gap-6 justify-center p-4 rounded-2xl">
                {filteredVehicles.map((vehicle, index) => (
                    <div key={index} className="inner-div cursor-pointer" onClick={() => handleClick(vehicle)}>
                        <div className="image-container">
                            <img src={vehicle.imgSrc} alt={vehicle.title} />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-4xl font-semibold mb-2">{vehicle.title}</h2>
                            <p className="text-2xl font-bold text-green-600 mb-2">${vehicle.price.toLocaleString('en-US')}</p>
                            <p className="text-xl text-gray-500">{vehicle.year}</p>
                            <p className="text-xl text-gray-500">{vehicle.mileage.toLocaleString('en-US')} km</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;