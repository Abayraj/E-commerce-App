const router =  require("express").Router();

const {verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
const { generatePasswordHash, comparePasswordHash, } = require("../utils/bcrypt");
const Product = require("../Models/Product");



//CREATE

router.post("/",verifyTokenAndAdmin,async (req,res)=>{
    console.log(req.body)
    const newProduct = new Product(req.body)

    try{

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err)
    }
})


//UPDATE
router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true}
        );
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);

    }
});

// //DELETE

router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
        await Product .findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted...")

    }
    catch(err){
        res.status(500).json(err)
    }
});

// //GET PRODUCT

router.get("/find/:id",async (req,res)=>{
    try{
       const product =  await Product.findById(req.params.id);
        res.status(200).json(product)  

    }
    catch(err){
        res.status(500).json(err)
    }
});

// //GET ALL PRODUCTS
router.get("/",async (req,res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;

    try{
        let products;
        if(queryNew){
            products  = await Product.find().sort({createdAt:-1})
        }

       const users = query ? await User.find().sort({_id: -1}).limit(1): await User.find();
        res.status(200).json(users)  

    }
    catch(err){
        res.status(500).json(err)
    }
});


// //GET USER STATS

// router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
//     const date  = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
//     console.log(lastYear)

//     try{

//         const data = await  User.aggregate([
//             {$match:{createdAt:{$gte:lastYear}}},
//             {
//                 $project:{
//                     month:{$month:"$createdAt"},
//                 },
//             },
//             {
//                 $group:{
//                     _id:"$month",
//                     total:{$sum:1},
//                 },
//             },
//         ]);
//         res.status(200).json(data)

//         // console.log(data,"data")

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })





module.exports = router;








