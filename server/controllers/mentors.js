const db = require("../config/db.config.js");
module.exports = {
    async showMentors (req, res) {
        try {
            db.query("SELECT* FROM staff",(err,results,fields)=>{
                if(!err){
                    res.send(results)
                }else{
                    console.log(err)
                }
            })
                  
          //console.log(req.body)
          
        }catch(err){
            console.log('this is the error', err);
            return res.status(404).send("error try again")
        }
        
    },
    async createMentor (req, res) {
        try {
            db.query("SELECT* FROM staff")
          console.log(req.body)
        }catch(err){
            console.log(err,'this is the error');
            return res.status(404).send("error try again")
        }
    },
    async updateMentor (req, res) {
        try {
            db.query("SELECT* FROM staff")
          console.log(req.body)
        }catch(err){
            console.log(err,'this is the error');
            return res.status(404).send("error try again")
        }
    },
    async deleteMentor (req, res) {
        try {
            db.query("SELECT* FROM staff")
          console.log(req.body)
        }catch(err){
            console.log(err,'this is the error');
            return res.status(404).send("error try again")
        }
    }
   
}