const express = require('express')
const Post = require('../models/post')

const router=express.Router();


// Get The Post

router.get('/', async (req,res) =>{
    try{
        const posts= await Post.find();
        res.json(posts)

    }catch(err){
        res.json({ message:err })
    }
});

// Get A specific Post

router.get('/:postId', async (req,res) =>{
    console.log(req.params.postId)
    try{
        const post=await Post.findById(req.params.postId);
        console.log(res.json(post))
        // res.json(post);
    }catch(err){
        res.json({message:err})
    }
});


// Delete A Specific Post

router.delete('/:postId', async (req,res) =>{
    console.log(req.params.postId)
    try{
        const post=await Post.remove({
            _id:req.params.postId
        });

        const posts= await Post.find();
        res.json(posts)
        console.log('deleted')
        // res.json(post);
    }catch(err){
        res.json({message:err})
    }
});





// Submit post
router.post('/', async (req,res)=>{
    // console.log(req.body);
    const post=new Post ({
        title:req.body.title,
        desctiption:req.body.desctiption,
});
try{
    const savedPost= await post.save()
    res.json(savedPost)

}catch(err){
    res.json({ message:err })
}

    // .then(data =>{
    //     res.json(data);
    // }).catch(err =>{
    //     res.json({message:err})
    // })
})


router.patch('/:postId', async (req,res) =>{
    console.log(req.params.postId)
    try{
        const updatedPost=await Post.updateOne({
            _id:req.params.postId
        },{
            $set:{
                title:req.body.title
            }
        });

        const AllValue= await Post.find();
        res.json(AllValue)
        console.log('updated')
        // res.json(post);
    }catch(err){
        res.json({message:err})
    }
});





module.exports=router;