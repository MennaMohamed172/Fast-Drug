const mongoose = require("mongoose")
// TODO: this file is not required anymore since we moved the role to the user model

const RoleSchema = new mongoose.Schema({
    title : {
            type : String,
            trim : true,
            required : true

},
owner:{
    type :mongoose.Schema.Types.ObjectId,
    required : true,
    ref : 'User'
}
})

const Role = mongoose.model( 'Role' , RoleSchema )


module.exports = Role