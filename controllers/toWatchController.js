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

//toWatch_index
const toWatch_index = (req, res) => {
    Drama.find({status:"To Watch"})
        .then( (result) => {
            res.render("toWatch/index", {
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
    toWatch_index
};