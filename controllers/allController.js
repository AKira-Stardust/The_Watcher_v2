const Drama = require('../models/drama');
const sharp = require("sharp");
const path = require("path");

//drama_details
//watched_index
const all_details = (req, res) => {
    Drama.find()
        .then( (result) => {
         
            res.render("all/all", {
                title: "All Dramas",
                dramaList: result
            });
            // res.send(result);
        })
        .catch ( (err) => {
            console.log("Error in fetching data! " + err);
        })    
}; 


//watched_add_get
const all_add_get = (req, res) => {
    res.render("all/addNewDrama", {
        title: "Add New Drama"
    });
};


//watched_add_post
const all_add_post = async (req, res) => {

    let buffer = null;
    if (req.file){
        buffer = await sharp(req.file.buffer).resize({width: 1000, height:700}).png().toBuffer();
    }
    
 
    const drama = new Drama({
        ...req.body,
        image: buffer
    });

    drama.save()
        .then(result =>{
            res.redirect("/"); })
        .catch( err => {
            console.log("Oops! Error saving Drama.. " + err);
        });
};

//update existing drama - get
const all_update_get = (req, res) => {
    const id = req.params.id;
    Drama.findById(id)
    .then( (result) => {
        res.render('all/updateDrama',{
            drama: result,
            title: "Update Drama"
        });
    })
    .catch( (err) =>{
        console.log("Oops, error locating that Drama! " + err);
    });
};

//update existing drama - put
const all_update_post = async (req, res) => {
    const id = req.params.id;

    // if (req.file){
    //     buffer = await sharp(req.file.buffer).resize({width: 1000, height:700}).png().toBuffer();
    // }
     
    const drama = {
        ...req.body
        // image: buffer
    };

    Drama.findByIdAndUpdate(id, drama)
    .then( (result) => {
        res.redirect(`/details/${id}`);
    })
    .catch( (err) =>{
        console.log("Oops, error updating that Drama! " + err);
    });
};

//send requested image
const all_image = async (req, res) => {
    const id = req.params.id;    
    const drama = await Drama.findById(id);

    if(!drama) {
        console.log("Oops, error finding that Drama! " + err);
    }
    else if(drama.image == null) {
        res.sendFile(path.join( __dirname, '../public/images', 'default_image.jpg'));
    }
    else {
        res.set("Content-Type", "image/png");
        res.send(drama.image);
    }    
};

//find particular drama
const all_find_drama = (req, res) => {
    Drama.find({title: { $regex: '.*' + req.query.title + '.*', $options: 'i' } })
        .then( (result) => {         
            res.render("all/all", {
                title: "Search Results",
                dramaList: result
            });
        })
        .catch ( (err) => {
            res.send("No Matching Dramas Found!");
        })
};

module.exports = { 
    all_details,
    all_add_get,
    all_add_post,
    all_update_get,
    all_update_post,
    all_image,
    all_find_drama
};