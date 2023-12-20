const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  propertyFor: String,
  propertyType: String,
    propertyName: String,
    price: String,
    info: String,
    availableDate: String,
    furnished: String,
    bills: String,
    bedrooms: String,
    bathrooms: String,
    reception: String,
    location: String,
    image1: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image2: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image3: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image4: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image5: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image6: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image7: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image8: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image9: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image10: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image11: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image12: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image13: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image14: {
         public_id: {type: String,},
       url: {type: String,}
    },
    image15: {
         public_id: {type: String,},
       url: {type: String,}
    },
    keyFeatures: [],
    lettingDetails: [],
    description: [
        {
            title: String,
            info: String
        }
    ]
})

module.exports = mongoose.model('Sale', salesSchema)