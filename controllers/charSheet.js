import { CharSheet } from '../models/charSheet.js'

function create(req, res) {
  req.body.owner = req.user.profile
  CharSheet.create(req.body)
  .then(char => {
    Char.findById(char._id)
    .then(populatedChar=> {
      res.json(populatedChar)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}


function index(req, res) {
  CharSheet.find({})
  .then(chars => res.json(chars))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  create,
  index 
}