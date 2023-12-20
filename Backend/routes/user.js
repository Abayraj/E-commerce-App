const router =  require("express").Router();
const {verifyToken , verifyTokenAndAuthorization} = require("./verifyToken");
const { generatePasswordHash, comparePasswordHash, } = require("../utils/bcrypt");
const User = require("../Models/User");


//UPDATE
router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
    if(req.body.password){
        const hashedPassword = await generatePasswordHash(req.body.password);
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true}
        );
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);

    }
})

module.exports = router;