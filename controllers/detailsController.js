const Drama = require('../models/drama');

//drama_details
const drama_details = (req, res) => {
    const id = req.params.id;
    Drama.findById(id)
    .then( (result) => {
        res.render('details',{
            drama: result,
            title: "Drama Details"
        });
    })
    .catch( (err) =>{
        console.log("Oops, error locating that Drama! " + err);
    });
};

//drama_delete
const drama_delete = (req, res) => { 
    const id = req.params.id;
    Drama.findByIdAndDelete(id)
        .then( () => {
            res.json({redirect:'/all'});
        })
        .catch( (err) => {
            console.log("Error running Delete DB command.. " + err);
        });
};

module.exports = { 
    drama_details,
    drama_delete
};