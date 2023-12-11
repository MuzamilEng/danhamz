const express = require('express')
const router = express.Router();

const multer = require('multer');
const path = require('path');

const {
    createLetting, getAllLettings, getLettingById, updateLettingById, deleteLettingById

} = require('../controllers/Lettings')
// Set up storage using multer.diskStorage
const storage = multer.diskStorage({
    destination: ('./public/uploads/'),
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 10 * 1024 * 1024,
    }
  });

// Use multer middleware in your route
router.post('/', upload.array('propertyImages', 5), createLetting);
router.route('/').get(getAllLettings)
// router.route('/').post(createLetting);
// .post(createContent);
router.route('/:id').get(getLettingById).delete(deleteLettingById).put(updateLettingById)

module.exports = router