const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema } = mongoose;

const utilisateur = new Schema({
    nom: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true}
);
// fonction pour verifier l'email a l'inscription
utilisateur.statics.findEmail = async (email) => {

    const User =await  user.findOne({email})
    if (User) throw new Error('erreur email  existe ')
    return User;
}

//fonction pour verifier l'email a la connexion

utilisateur.statics.findCon= async (email,password)=>{
    const User = await user.findOne({email:email})
    console.log(User);
    if(!User) throw new error ('erreur email n existe pas')
    const ispasswordvalid = await bcrypt.compare(password, User.password)
    if (!ispasswordvalid) throw new Error('erreur password n existe pas')
    return User;
}



//bcript utlisation de .pre pour crypter avant sauvegarde ('save')
utilisateur.pre('save', async function () {
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 8)
})



const user = mongoose.model("Users", utilisateur);

module.exports = user