const express=require('express');
const router= express.Router();
const controller=require('../controllers/postController');
const middleware=require('../middleware/authmiddleware');


router.post('/',authmiddleware.createPost);
router.get('/', postcontroller.getAllPosts);
router.get('/:id',postcontroller.getPostById);
router.put('/:id',authmiddleware.postcontroller.updatePost);
router.delete('/:id',authmiddleware.deletePost);

module.exports=router;

