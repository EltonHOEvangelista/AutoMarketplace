//server.js
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

// importing packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

// setups
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Use the environment variables
const port = process.env.PORT || 5000;
const mongoUri = process.env.DB_URI;

//Database connection
mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB');
        //Start Express Server once connected to MongoDB
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// define Schema Class
const Schema = mongoose.Schema;

//Bid schema. Sub-item of vehicle schema
const bidSchema = new Schema({
    bidPrice: { type: Number, required: true },
    bidTime: { type: Date, default: Date.now }
});

// Create a Schema object
const vehiclesSchema = new Schema({
    vin: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    maker: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    engineType: { type: String, required: true },
    transmission: { type: String, required: true },
    mileage: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: String, default: 'no' },
    imgSrc: { type: String, required: true },
    bids: [bidSchema]
});

const VehicleModel = mongoose.model("Vehicle", vehiclesSchema);

//Set router
const router = express.Router();
app.use('/api', router);

//Load form to add vehicle
router.route('/addvehicle')
    .post(async (req, res) => {
        try {
            const newVehicle = new VehicleModel(req.body);
            await newVehicle.save();
            res.status(201).json("Document created!");
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

//Load all vehicles (added year and mileage)
router.route("/")
    .get((req, res) => {
        VehicleModel.find()
            .then((vehicles) => res.json(vehicles.map(vehicle => ({
                vin: vehicle.vin,
                title: vehicle.title,
                price: vehicle.price,
                imgSrc: vehicle.imgSrc,
                year: vehicle.year,
                mileage: vehicle.mileage,
                }))))
            .catch((err) => res.status(400).json("Error: " + err));
    });

//Load vehicle details and bid placing
router.route("/bid/:vin")
    .get((req, res) => {
        VehicleModel.findOne({ vin: req.params.vin })
            .then((vehicle) => res.json(vehicle))
            .catch((err) => res.status(400).json("Error: " + err));
    })
    .put((req, res) => {
        VehicleModel.findOne({ vin: req.params.vin })
            .then((vehicle) => {
                if (!vehicle) {
                    return res.status(404).json("Vehicle not found");
                }
                
                // Create a new bid object
                const newBid = {
                    bidPrice: req.body.bidPrice,
                    bidTime: req.body.bidTime
                };

                // Add the new bid to the bids array
                vehicle.bids.push(newBid);

                // Save the vehicle with the new bid
                vehicle
                    .save()
                    .then(() => res.status(201).json("Bid placed!"))
                    .catch((err) => res.status(400).json("Error: " + err));
            })
            .catch((err) => res.status(400).json("Error: " + err));
    });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../auto-mp-client/dist')));

// Wildcard route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../auto-mp-client/dist', 'index.html'));
});

module.exports = app;