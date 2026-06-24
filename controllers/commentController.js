
const commentService=require('../services/commentService');

// creer un commentaire
const createComment=async(req,res)=>{
    try{

         const{postID, content}=req.body;
        
         const userID=req.user.id;
        if(!postID||!content){
            res.status(400).json({message:"titre et contenu requis"});
        }
         const comment=await commentService.createComment(postID,content);
         res.status(201).json({message:"commentaure cree",comment});

    }catch(err){
        console.error("erreur:",err)
        res.status(500).json({error:"erreur intervenue veuillez ressayer plutard"});

    }

}

// Récupérer les commentaires d'un article
const getCommentByPostId=async(req,res)=>{
    try{

          const{postID}=req.params;
          const comment=await commentService.getCommentByPostId(postID);
         res.json(comment);
    }catch(err){
        console.error("erreur:",err)
        res.status(500).json({error:"erreur intervenue veuillez ressayer plutard"});

    }

}

// supprimer les commentaire d'un article
const deleteCommentByPostId=async(req,res)=>{
     try{
        const{postID}=req.params;
        const comment=await commentService.deleteCommentByPostId(postID);
        res.jsom({message:"commentaire supprime"});

     }catch(err){
         console.error("erreur:",err)
        res.status(500).json({error:"erreur intervenue veuillez ressayer plutard"});
     }
}

module.exports={ createComment,getCommentByPostId, deleteCommentByPostId};