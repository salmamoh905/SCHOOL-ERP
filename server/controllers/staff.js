
module.exports = {
    async showStaff(req, res) {
        try {
            let sql = "SELECT * FROM staff";
            let query = db.query(sql, async (err, results) => {
              if (err) throw err;
              else {
                res.send(results);
              }
            });
          } catch (error) {
            next(error);
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