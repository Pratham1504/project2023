const mongoose = require('mongoose');
const schema = mongoose.Schema;

const date = new Date()


const project = new schema({
    name: {
        required: true,
        type: String
    },

    description:{
        required :true,
        type:String
    },

    createdAt: {
        required: true,
        type: String,
        default:date.toLocaleString()
    },

    createdBy:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, ref: `user`
    },

    updatedAt: {
        type: String,
        default:date.toLocaleString()
    },
    
    boards:[
        {
            name:{required: true,type:String},
            description:{required: true,type:String},
            _id:{required: true,type: mongoose.Schema.Types.ObjectId, ref:`board`},
            createdAt:{required:true , type:String}
        }
    ],

    members:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `user`,
        }
    ],

    orgId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, ref: `organisation`,
    }

})

module.exports = mongoose.model('project', project);