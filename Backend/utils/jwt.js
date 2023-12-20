const jwt  = require("jsonwebtoken");


const generateAccessToken = (userId,isAdmin) =>{
    return jwt.sign(
        {userId,isAdmin},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"4d"}
        
        );
};


module.exports={generateAccessToken};