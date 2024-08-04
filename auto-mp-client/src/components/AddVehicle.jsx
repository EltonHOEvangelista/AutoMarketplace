//AddVehicle.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const AddVehicle = () => {

  const [vehicle, setVehicle] = useState({
    vin: '',
    title: '',
    maker: '',
    model: '',
    year: '',
    color: '',
    engineType: '',
    transmission: '',
    mileage: '',
    location: '',
    description: '',
    price: '',
    imgSrc: '',
    bids: []
  });

  const [fileName, setFileName] = useState('Choose File');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setVehicle(prevState => ({
        ...prevState,
        imgSrc: reader.result
      }));
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://auto-marketplace.vercel.app:5000/api/addvehicle', vehicle)    //  `${import.meta.env.VITE_API_BASE_URL}/api/addvehicle`
      .then(response => {
        console.log('Vehicle added:', response.data);
        setVehicle({
          vin: '',
          title: '',
          maker: '',
          model: '',
          year: '',
          color: '',
          engineType: '',
          transmission: '',
          mileage: '',
          location: '',
          description: '',
          price: '',
          imgSrc: '',
          bids: []
        });
        setFileName('Choose File');
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <>
      <Header />

      <div className='flex justify-center items-center min-h-screen bg-gray-100 p-6'>
        <div className='bg-white shadow-xl rounded-2xl p-12 w-full max-w-5xl'>
          <h2 className='text-4xl font-bold text-blue-950 mb-10 text-center'>Vehicle Details</h2>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='flex flex-col'>
              <label htmlFor="vin" className='text-base font-medium text-gray-600'>VIN</label>
              <input
                type="text"
                name="vin"
                id="vin"
                value={vehicle.vin}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter VIN"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="title" className='text-base font-medium text-gray-600'>Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={vehicle.title}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Title"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="maker" className='text-base font-medium text-gray-600'>Maker</label>
              <input
                type="text"
                name="maker"
                id="maker"
                value={vehicle.maker}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Maker"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="model" className='text-base font-medium text-gray-600'>Model</label>
              <input
                type="text"
                name="model"
                id="model"
                value={vehicle.model}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Model"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="year" className='text-base font-medium text-gray-600'>Year</label>
              <input
                type="number"
                name="year"
                id="year"
                value={vehicle.year}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Year"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="color" className='text-base font-medium text-gray-600'>Color</label>
              <input
                type="text"
                name="color"
                id="color"
                value={vehicle.color}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Color"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="engineType" className='text-base font-medium text-gray-600'>Engine Type</label>
              <input
                type="text"
                name="engineType"
                id="engineType"
                value={vehicle.engineType}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Engine Type"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="transmission" className='text-base font-medium text-gray-600'>Transmission</label>
              <input
                type="text"
                name="transmission"
                id="transmission"
                value={vehicle.transmission}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Transmission"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="mileage" className='text-base font-medium text-gray-600'>Mileage</label>
              <input
                type="number"
                name="mileage"
                id="mileage"
                value={vehicle.mileage}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Mileage"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="location" className='text-base font-medium text-gray-600'>Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={vehicle.location}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Location"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="price" className='text-base font-medium text-gray-600'>Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={vehicle.price}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Enter Price"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="imgSrc" className='text-base font-medium text-gray-600'>Photo</label>
              <input
                type="file"
                name="imgSrc"
                id="imgSrc"
                onChange={handleFileChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='flex flex-col lg:col-span-3'>
              <label htmlFor="description" className='text-base font-medium text-gray-600'>Description</label>
              <textarea
                name="description"
                id="description"
                value={vehicle.description}
                onChange={handleChange}
                className='mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                rows="4"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div className='flex justify-center md:col-span-2 lg:col-span-3'>
              <button
                type="submit"
                name="addVehicle"
                className='bg-blue-950 hover:bg-blue-900 text-white font-semibold py-4 px-10 rounded-md shadow-md transition duration-300'
              >Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;