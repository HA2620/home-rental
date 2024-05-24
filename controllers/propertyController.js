const asyncHandler = require('express-async-handler');
const PropertyModel = require('../models/property');
const mongoose = require('mongoose')

// @desc    Fetch all houses
// @route   GET /api/houses
// @access  Public
const getHouses = asyncHandler(async (req, res) => {
  const houses = await PropertyModel.find({});
  res.json(houses);
});

// @desc    Fetch single house
// @route   GET /api/houses/:id
// @access  Public
const getHouseById = asyncHandler(async (req, res) => {
  const house = await PropertyModel.findById(req.params.id);

  if (house) {
    res.json(house);
  } else {
    res.status(404);
    throw new Error('House not found');
  }
});

// @desc    Create a house
// @route   POST /api/houses
// @access  Private
const createHouse = asyncHandler(async (req, res) => {
  const { type, price, location, rooms, washrooms } = req.body;

  const house = new PropertyModel({
    type,
    price,
    location,
    rooms,
    washrooms,
    owner: req.user._id
  });

  const createdHouse = await house.save();
  res.status(201).json(createdHouse);
});

module.exports = {
  getHouses,
  getHouseById,
  createHouse
};
