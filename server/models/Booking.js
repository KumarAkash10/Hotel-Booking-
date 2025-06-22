import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    //yha s krna h ab 6:45
},{timestamps: true});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;