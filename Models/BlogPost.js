const mongoose = require('mongoose');

//schema
const Schema =mongoose.Schema;
const BlogPostSchema = new Schema({
    title:String,
    body:String,
    date:{
        type:String,
        default:Date.now()
    }
});

//Model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;