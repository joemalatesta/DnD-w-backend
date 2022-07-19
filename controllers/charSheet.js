import { CharSheet } from '../models/charSheet.js'

function index(req, res) {
  CharSheet.find({})
  .then(chars => res.json(chars))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  console.log(req.body);
  CharSheet.create(req.body)
  .then(char => {
    CharSheet.findById(char._id)
    .populate('owner')
    .then(populatedCharSheet => {
      res.json(populatedCharSheet)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}


function deleteOne(req, res) {
  CharSheet.findById(req.params.id)
  .then(char => {
    if (char.owner._id.equals(req.user.profile)) {
      CharSheet.findByIdAndDelete(char._id)
      .then(deletedCharSheet => {

        res.json(deletedCharSheet)
      })
    } else {

      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  CharSheet.findById(req.params.id)
  .then(char => {
    if (char.owner._id.equals(req.user.profile)) {
      CharSheet.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('owner')
      .then(updatedCharSheet => {
        res.json(updatedCharSheet)
      })
    } else {
      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export { 
  index, 
  create,
  deleteOne as delete,
  update
}