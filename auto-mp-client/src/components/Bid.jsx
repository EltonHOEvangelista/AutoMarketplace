//Bid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Bid = () => {

    const { vin } = useParams();

    const [vehicle, setVehicle] = useState(null);

    const [bid, setBid] = useState({
      bidPrice: '',
      bidTime: ''
    });

    const [bids, setBids] = useState([]);

    // State to keep track of the highest bid
    const [highestBid, setHighestBid] = useState(0);

    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/bid/${vin}`) 
          .then(response => {
            setVehicle(response.data);
            setBids(response.data.bids || []);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, [vin]);

    //Calculate the highest bid whenever the bids array is updated
    useEffect(() => {
      if (bids.length > 0) {
        const maxBid = Math.max(...bids.map(bid => bid.bidPrice));
        setHighestBid(maxBid);
      } else if (vehicle) {
        setHighestBid(vehicle.price); // Set to vehicle's price if no bids are available and vehicle data is present
      }
    }, [bids, vehicle]);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBid(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newBid = {
        bidPrice: bid.bidPrice,
        bidTime: new Date()
      };
      
      axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/bid/${vin}`, newBid)
        .then(response => {
          console.log('Bid placed:', response.data);
          setBid({
            bidPrice: '',
            bidTime: ''
          });
          setBids(prevBids => [...prevBids, newBid]);
        })
        .catch(error => {
          console.error('There was an error adding the item!', error);
        });
    };

    if (!vehicle) {
      return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className='bidContainer'>
              <div className='column'>
                <div className='inner-div'>
                  <img src={vehicle.imgSrc} alt={vehicle.title} />
                </div>
                <div className='inner-div'>
                  <h2>Vehicle Details</h2>
                  <div className='vehicle-details'>
                    <label htmlFor="vehicleTitle">Title</label>
                    <input type="text" name="vehicleTitle" id="vehicleTitle" value={vehicle.title} disabled/>

                    <label htmlFor="vehicleMaker">Maker</label>
                    <input type="text" name="vehicleMaker" id="vehicleMaker" value={vehicle.maker} disabled/>

                    <label htmlFor="vehicleModel">Model</label>
                    <input type="text" name="vehicleModel" id="vehicleModel" value={vehicle.model} disabled/>

                    <label htmlFor="vehicleYear">Year</label>
                    <input type="number" name="vehicleYear" id="vehicleYear" value={vehicle.year} disabled/>

                    <label htmlFor="vehicleColor">Color</label>
                    <input type="text" name="vehicleColor" id="vehicleColor" value={vehicle.color} disabled/>

                    <label htmlFor="vehicleEngineType">Engine Type</label>
                    <input type="text" name="vehicleEngineType" id="vehicleEngineType" value={vehicle.engineType} disabled/>

                    <label htmlFor="vehicleTransmission">Transmission</label>
                    <input type="text" name="vehicleTransmission" id="vehicleTransmission" value={vehicle.transmission} disabled/>

                    <label htmlFor="vehicleMileage">Mileage</label>
                    <input type="number" name="vehicleMileage" id="vehicleMileage" value={vehicle.mileage} disabled/>

                    <label htmlFor="vehicleLocation">Location</label>
                    <input type="text" name="vehicleLocation" id="vehicleLocation" value={vehicle.location} disabled/>

                    <label htmlFor="vehicleDescription">Description</label>
                    <input type="text" name="vehicleDescription" id="vehicleDescription" value={vehicle.description} disabled/>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='inner-div'>
                  <h1>Bid</h1>
                  <p>Submit your top bid</p>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="currentBid">Best Bid</label>
                    <input type="number" name="currentBid" id="currentBid" value={highestBid} disabled />

                    <label htmlFor="bidPrice">Your Bid</label>
                    <input type="number" name="bidPrice" id="bidPrice" value={bid.bidPrice} onChange={handleChange}/>
                    
                    <button type="submit" name="placeBid" id="placeBid">Bid</button>
                  </form>
                </div>
                <div className='inner-div'>
                  <h2>Bid Records</h2>
                  <div className="space-y-2">
                  {bids
                    .sort((a, b) => b.bidPrice - a.bidPrice) // Sort bids by highest price first
                    .map((bid, index) => (
                      <div key={index} className="bg-gray-100 p-2 rounded-2xl my-2">
                        <p className={`font-bold ${index === 0 ? 'text-green-600 text-2xl' : 'text-red-500 text-xl'}`}>
                          {`Bid ${index + 1}: $${bid.bidPrice.toLocaleString()}`}
                        </p> {/* Conditionally styled bid price */}
                        <p className="text-sm text-gray-500">{`at ${new Date(bid.bidTime).toLocaleString()}`}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
        </>    
    );
};

export default Bid;
