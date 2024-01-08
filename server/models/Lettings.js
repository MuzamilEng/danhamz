const mongoose = require('mongoose');

const lettingsSchema = new mongoose.Schema({
  propertyFor: String,
  propertyType: String,
    propertyName: String,
    pricePerWeek: Number,
    pricePerMonth: Number,
    info: String,
    availableDate: String,
    furnished: String,
    bills: String,
    bedrooms: Number,
    bathrooms: Number,
    reception: String,
    location: String,
    lat: Number,
    lng: Number,
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
  areaGuide: '',
  livingRoomGuide: '',
  kitchenGuide: '',
  bedroomsGuide: '',
  bathroomsGuide: '',
  externalsGuide: '',
  aditionalGuide: "",
})

module.exports = mongoose.model('Letting', lettingsSchema)