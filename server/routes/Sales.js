const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createSalesProperty, updateSalesProperty, getAllSalesProperties,  getSalesPropertyById, deleteSalesPropertyById, } = require('../controllers/Sales');

const storage = multer.diskStorage({
  // destination: ('./public/uploads/'),
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 10 * 1024 * 1024, // Increase field size limit to 10MB (adjust as needed)
  }
});

const uploadFiles = upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }, { name: 'image5', maxCount: 1 }, { name: 'image6', maxCount: 1 }, { name: 'image7', maxCount: 1 }, { name: 'image8', maxCount: 1 }, { name: 'image9', maxCount: 1 }, { name: 'image10', maxCount: 1 }, { name: 'image11', maxCount: 1 }, { name: 'image12', maxCount: 1 }, { name: 'image13', maxCount: 1 }, { name: 'image14', maxCount: 1 }, { name: 'image15', maxCount: 1 }])



// Get all lettings
router.route('/').get(getAllSalesProperties);

// Create a new letting
router.route('/').post(uploadFiles, createSalesProperty);

// Update an existing letting by ID
router.route('/:id').put(uploadFiles, updateSalesProperty);

// Get a letting by ID and Delete a letting by ID
router.route('/:id').get(getSalesPropertyById).delete(deleteSalesPropertyById);

module.exports = router;
