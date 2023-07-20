const { ASSOCIATION_ROLE } = require("../constants/roles")
const User = require("../models/Register")
const Donat = require("../models/donation")

const getAllAssociations =async (req , res) => {
    const associations = await User.find({role : ASSOCIATION_ROLE})
    res.status(200).json(associations)
}

const getDonationForMyAssociation = async (req , res ) => {
    // we want to get the donations for the current logged in association
    // the association is a normal user so we can get the asscciation like so
    const association = req.user
    const { _id } = association

    const donations = await Donat.where({association: _id}).populate('donatedBy')

    res.json(donations)
}

module.exports = {
    getAllAssociations,

    getDonationForMyAssociation
}