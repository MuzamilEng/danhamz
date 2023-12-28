const salesSchema = require('../models/Sales');
const cloudinary = require('../cloudinary.config')

const createSalesProperty = async (req, res) => {
  const {
    propertyName, price, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
    location, keyFeatures, lettingDetails, description,  propertyFor, propertyType,
  } = req.body;

  const imageUrls = [];

  try {
    // Upload /images to Cloudinary in parallel
    await Promise.all(
      Array.from({ length: 15 }, (_, index) => `image${index + 1}`).map(async (fieldName) => {
        if (req.files[fieldName]) {
          const image = req.files[fieldName][0];
          const result = await cloudinary.uploader.upload(image.path, {
            folder: 'Assets',
          });
          imageUrls.push({ [fieldName]: { public_id: result.public_id, url: result.secure_url } });
        }
      })
    );

    const newContent = new salesSchema({
      propertyName, price, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
      location, keyFeatures, lettingDetails, description, propertyFor, propertyType, ...Object.assign({}, ...imageUrls),
    });

    const savedContent = await newContent.save();

    const responseObj = {
      ...savedContent._doc,
      ...Object.assign({}, ...imageUrls),
    };

    res.status(201).json(responseObj);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ message: 'Error saving product' });
  }
};


// Function to update an existing letting
const updateSalesProperty = async (req, res) => {
  const {
    propertyName, price, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
    location, keyFeatures, lettingDetails, description,
  } = req.body;

  const updateFields = {
    propertyName, price, info, availableDate, furnished, bills, bedrooms, bathrooms, reception,
    location, keyFeatures, lettingDetails, description, propertyFor, propertyType,
  };

  try {
    const existingContent = await salesSchema.findById(req.params.id);

    if (!existingContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    // Keep track of existing public_ids to delete them later
    const existingPublicIds = [];

    for (let i = 1; i <= 15; i++) {
      const fieldName = `image${i}`;

      if (req.files[fieldName]) {
        // Delete previous image if it exists
        if (existingContent[fieldName] && existingContent[fieldName].public_id) {
          existingPublicIds.push(existingContent[fieldName].public_id);
        }

        const image = req.files[fieldName][0];
        const result = await cloudinary.uploader.upload(image.path, {
          folder: 'Assets',
        });

        updateFields[fieldName] = { public_id: result.public_id, url: result.secure_url };
      }
    }

    // Delete previous /images in Cloudinary
    for (const publicId of existingPublicIds) {
      await cloudinary.uploader.destroy(publicId.replace(cloudinary.config().cloud_name + '/', ''));
    }

    const updatedContent = await salesSchema.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedContent) {
      return res.status(500).json({ message: 'Failed to update content' });
    }

    res.status(200).json(updatedContent);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

// Get all lettings
const getAllSalesProperties = async (req, res) => {
  try {
    const lettings = await salesSchema.find();
    res.status(200).json(lettings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get a single letting by ID
const getSalesPropertyById = async (req, res) => {
  try {
    const letting = await salesSchema.findById(req.params.id);
    if (!letting) {
      return res.status(404).json({ error: 'Letting not found' });
    }
    res.status(200).json(letting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete a letting by ID
const deleteSalesPropertyById = async (req, res) => {
  try {
    const deletedLetting = await salesSchema.findByIdAndRemove(req.params.id);
    if (!deletedLetting) {
      return res.status(404).json({ error: 'Letting not found' });
    }
    res.status(200).json(deletedLetting);
    // console.log("Successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSalesProperty,
  updateSalesProperty,
  getAllSalesProperties,
  getSalesPropertyById,
  deleteSalesPropertyById,
};