
const express=require('express');
const router= express.Router();
const controller=require('../controllers/commentController');
const middleware=require('../middleware/authmiddleware');

router.get('/:id',authmiddleware.getComment);
router.put('/:id',authmiddleware.updateComment);
router.delete('/:id',authmiddleware.deleteComment);

module.exports=router;
