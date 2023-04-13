const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
firstname:{
    type: String,
    required: true
},
lastname:{
    type: String
},
email:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
},
photoUrl:{
    type: String
},
interests: [String],
numberOfFollowers:{
    type: Number,
    default: 0
},
followers: [
    {
        name:{
            type: String,
            required: true
        },
        designation:{
            type: String,
            required: true
        },
        numberoffollowers:{
            type: Number,
            required: true,
            default: 0
        },
        photourl: {
            type: String
        }

    }
]
});

const User = mongoose.model('User',userSchema);

module.exports = {User}