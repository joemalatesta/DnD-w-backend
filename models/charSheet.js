import mongoose from 'mongoose'
import { Profile } from './profile'

const charSheetSchema = new mongoose.Schema({
  name: String,
  race:String,
  class:String,
  level: Number,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  armorclass: Number,
  inv: [String],
  owner: (ObjectId) ,
},{
    timestamps: true,
})

const CharSheet = mongoose.model('CharSheet', charSheetSchema)

export {CharSheet}