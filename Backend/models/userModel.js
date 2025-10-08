import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: true, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: true },
    fees: { type: Number, required: true },
    address: { type: String, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false })

const userModel = mongoose.model.user || mongoose.model('user', userSchema)

export default userModel;