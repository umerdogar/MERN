const express = require('express');
const router = express.Router();
const BlogPost = require('../Models/BlogPost');

//Routes
router.get('/name',(req,res) => {
    BlogPost.find({})
        .then((data) => {
            console.log('date:',data);
            res.json(data);
        })
        .catch((data) => {
            console.log('error:',daerrorta);
        });
        
});

router.post('/save',(req,res) => {
    const data = req.body;
    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if(error){
            res.status(500).json({msg:'sorry internal server error'});
        }
        else{
            //blogpost
            res.json({
                msg:'your data has been saved'
            });
        }
    });
});


router.get('/smallname',(req,res) => {
    const data ={
        username: 'umer',
        age:5
    };
    res.json(data);
});

module.exports = router;