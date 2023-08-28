const express = require('express')
const router = express.Router();


const userController = require('../controller/userController');
const attendanceController = require('../controller/checkInController');
const authController = require('../controller/authController')



router.post('/register',authController.Register)

// login
router.post('/login',authController.Login)

// create Attendance
router.post('/createAttendance',attendanceController.createAttendance);

// create Attendance
router.put('/updateAttendance/:id',attendanceController.updateAttendance);

// Delete Attendance
router.delete('/deleteAttence/:id', attendanceController.deleteAttendance);

// get Attendance
router.get('/attendance/:id', attendanceController.getAttendanceById);

router.get('/attendanceByUser/:id', attendanceController.getAttendanceByUserId);



// Create user
router.post('/createuser',userController.createUser);

// Update user
router.put('/updateuser/:id', userController.updateUser);

// Delete user
router.delete('/deleteuser/:id', userController.deleteUser);

// Get all users
router.get('/users', userController.getAllUsers);


// Get a specific user
router.get('/users/:id', userController.getUserById);


router.use((req, res) => {
    res.status(404).json({ error: 'URL not found' });
  });


module.exports = router;