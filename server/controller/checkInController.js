
const Attendance = require('../model/attendance');
const User = require('../model/user')

// create Attendance
const createAttendance = async (req, res) => {
    console.log("inside create attendance")
    try {
        const { userId, date, checkInTime, checkOutTime, status } = req.body;

        const user = await User.findById(userId);
        // console.log("user",user)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const newAttendance = new Attendance({ user: userId, date, checkInTime, checkOutTime, status });
        const savedAttendance = await newAttendance.save();
        res.status(200).json(savedAttendance);

    }
    catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });

    }
};


// update attendance
const updateAttendance = async (req, res) => {
    try {
        const attendanceId = req.params.id;
        //   console.log("user id----------",userId)
        const { checkOutTime, time } = req.body;
        const updatedAttendance = await Attendance.findByIdAndUpdate(attendanceId, { checkOutTime, time }, { new: true });
        if (!updatedAttendance) {
            return res.status(404).json({ error: 'Attendance not found' });
        }
        res.json(updatedAttendance);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Delete a Attendance
const deleteAttendance = async (req, res) => {
    try {
        const attendanceId = req.params.id;
        const deletedAttendance = await Attendance.findByIdAndDelete(attendanceId);
        if (!deletedAttendance) {
            return res.status(404).json({ error: 'Attendance not found' });
        }
        res.json({ message: 'Attendance deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getAttendanceById = async (req, res) => {
    try {
        const attendanceId = req.params.id;
        console.log(attendanceId)
        const attendance = await Attendance.findById(attendanceId);
        //   console.log("this is suriurfhiuhr===============================",user.name)
        if (!attendance) {
            return res.status(404).json({ error: 'attendance not found' });
        }
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAttendanceByUserId = async (req, res) => {
    console.log("inside the attendance by user id")
    try {
        const userId = req.params.id;
        const attendanceRecords = await Attendance.find({ user: userId });

        if (!attendanceRecords) {
            return res.status(404).json({ error: 'attendance not found' });

        }
        res.json(attendanceRecords);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });

    }

};

module.exports = {
    createAttendance,
    updateAttendance,
    deleteAttendance,
    getAttendanceById,
    getAttendanceByUserId
};