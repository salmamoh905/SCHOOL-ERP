const express = require('express');

const router = express.Router();

// middleware to require sign in and check user
//const { requireSignin ,userCheck }= require( "../middlewares");

// controllers
const {
    showMentors,
    createMentor,
    updateMentor,
    deleteMentor
  
  }= require('../controllers/mentors')
  
  router.get("/show-mentors",showMentors);
  router.post("/create-mentor",createMentor);
  router.get("/update-mentor",  updateMentor);
  router.get("/delete-mentor", deleteMentor);
  



module.exports = router;