const Drama = require('../models/drama');
// watched_index, watched_add_get, watched_add_post, watched_delete

//Test Data
const dramaList = [
    {
        title: "Hometown Cha Cha Cha",
        stars: 5,
        year: 2021,
        episodes: 16,
        status: 2
    },
    {
        title: "Startup",
        stars: 4,
        year: 2020,
        episodes: 12,
        status: 2
    },
    {
        title: "Two Cops",
        stars: 3.5,
        year: 2015,
        episodes: 21,
        status: 2
    }
];

//watched_index
const watched_index = (req, res) => {
    Drama.find({status:"Watched"})
        .then( (result) => {
            res.render("watched/index", {
                title: "All Watched Dramas",
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
    watched_index
};