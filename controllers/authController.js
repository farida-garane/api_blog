
const service=require('../services/authService')
 
// inscription
const inscription=async(req,res)=>{

    try{
        const{nom, email, password}=req.body;
        if(!nom ||!email || !password){
            return res.status(400).json({error:"Tous les champs sont requis"})

        }
        const user=await authService.register(nom, email, password);
        res.status(201).json({message:"utilisateur  cree", user});

    }catch(err){
       console.error("Erreur lors de l'inscription :", err); //  a l'interne
       res.status(500).json({ message: "Une erreur interne est survenue. Réessayez plus tard." });

    }
}

// Connection
const connexion=async(req,res)=>{
    try{
       const{email,password}=req.body;
        if(!email ||!password){
           return res.status(400).json({error:"Tous les champs sont requis"})
        }

        const{token,user}=await authService.connexion(email, password);
         res.json({token,user});

    }catch(err){
      console.error("Erreur lors de la connexion :", err); // a l'interne
      res.status(401).json({ message: "Email ou mot de passe incorrect" }); // ce que le client voit
    }
   

}