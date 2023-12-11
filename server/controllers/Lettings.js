const Letting = require('../models/Lettings');

// Create a new letting
const createLetting = async (req, res) => {
    try {
      const { propertyName, pricePerWeek, pricePerMonth, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
         location, keyFeatures, lettingDetails, description,  } = req.body;
  
      // Assuming you have a 'propertyImages' field in your form for file uploads
      const propertyImages = req.files.map((file) => file.filename);
  
      const newProperty = new Letting({
        propertyName, pricePerWeek, pricePerMonth, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
        propertyImages, location, keyFeatures, lettingDetails, description });
  
      const savedProperty = await newProperty.save();
      res.status(201).json(savedProperty);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  };
  

// Get all lettings
const getAllLettings = async (req, res) => {
  try {
    const lettings = await Letting.find();
    res.status(200).json(lettings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single letting by ID
const getLettingById = async (req, res) => {
  try {
    const letting = await Letting.findById(req.params.id);
    if (!letting) {
      return res.status(404).json({ error: 'Letting not found' });
    }
    res.status(200).json(letting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a letting by ID
const updateLettingById = async (req, res) => {
  try {
    const updatedLetting = await Letting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLetting) {
      return res.status(404).json({ error: 'Letting not found' });
    }
    res.status(200).json(updatedLetting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a letting by ID
const deleteLettingById = async (req, res) => {
  try {
    const deletedLetting = await Letting.findByIdAndRemove(req.params.id);
    if (!deletedLetting) {
      return res.status(404).json({ error: 'Letting not found' });
    }
    res.status(200).json(deletedLetting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLetting,
  getAllLettings,
  getLettingById,
  updateLettingById,
  deleteLettingById,
};


// citylet, 