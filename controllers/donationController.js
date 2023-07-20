const Donat = require("../models/donation")
// Get All Elemnts

const getAllElement = async function (req, res) {
  Donat.find({})
    .then((donate) => {
      res.status(200).send(donate)
    })
    .catch((e) => {
      res.status(500).send(e)
    })
}

// Get elment by id

const getElmenetById = async function (req, res) {
  const _id = req.params.id
  Donat.findById(_id)
    .then((donat) => {
      if (!donat) {
        return res.status(404).send("UNABLE TO FIND")
      }
      res.status(200).send(donat)
    })
    .catch((e) => {
      res.status(500).send(e)
    })
}

// add new donation

const addNewDonataion = async function (req, res) {
  console.log(req.body)
  req.body.FullName = `${req.user.FirstName} ${req.user.LastName}`
  const donat = new Donat(req.body)

  donat
    .save()
    .then((donat) => {
      res.status(200).send(donat)
    })
    .catch((e) => {
      res.status(400).send(e)
    })
}

// Put to update data by id

const updateById = async function (req, res) {
  try {
    const _id = req.params.id
    const donat = await Donat.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!donat) {
      return res.status(404).send("No User Founded")
    }
    res.status(200).send(donat)
  } catch (error) {
    res.status(400).send(error)
  }
}

// delete by id

const deletById = async function (req, res) {
  try {
    const _id = req.params.id
    const donat = await Donat.findByIdAndDelete(_id)
    if (!donat) {
      return res.status(404).send("UNABLE TO FIND USER")
    }
    res.status(200).send(donat)
  } catch (e) {
    res.status(400).send(e)
  }
}

module.exports = {
  getAllElement,
  addNewDonataion,
  getElmenetById,
  updateById,
  deletById,
}
