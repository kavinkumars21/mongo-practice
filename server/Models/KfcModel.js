import mongoose from "mongoose";

const kfcSchema = new mongoose.Schema({
    identifier: String,
    name: String,
    img: String,
    price: Number
})

export const KFCModel = mongoose.model('menu', kfcSchema);
