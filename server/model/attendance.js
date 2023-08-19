const mongoose = require('mongoose');

// Define the Attendance Schema
const attendanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    checkInTime: {
        type: Date,
    },
    checkOutTime: {
        type: Date,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        default: 'Present',
    },
});

// Create the Attendance Model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
