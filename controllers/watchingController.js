const Drama = require('../models/drama');

//Test Data
const dramaList = [
    {
        title: "Test1",
        stars: 5,
        year: 2020
    },
    {
        title: "Test2",
        stars: 4,
        year: 2002
    },
    {
        title: "Test3",
        stars: 5,
        year: 2010
    }
];

//watching_index
const watching_index = (req, res) => {    
    Drama.find({status:"Watching"})
        .then( (result) => {
            res.render("watching/index", {
                title: "All To Watch Dramas",
                dramaList: result
            });
            // console.log(result);
        })
        .catch ( (err) => {
            console.log("Error in fetching data! " + err);
        })    
}; 

//EXPORT
module.exports = {
    watching_index
};