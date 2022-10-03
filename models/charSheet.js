import mongoose from 'mongoose'

const charSheetSchema = new mongoose.Schema({
  name: String,
  align: String,
  race: String,
  class: String,
  background: String,
  level: Number,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  armorclass: Number,
  experience: Number,
  hitDie: Number,
  hitPoints: Number,
  inv: [String],
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"} ,
},{
    timestamps: true,
})

const CharSheet = mongoose.model('CharSheet', charSheetSchema)

export {
  CharSheet
}