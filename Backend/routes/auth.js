const router = require("express").Router();
const User = require("../Models/User");
const {
    generatePasswordHash,

    comparePasswordHash,

} = require("../utils/bcrypt");




//Register router sign up

router.post("/register", async (req, res) => {
    const { username,password,email } = req.body;
    console.log(username,password,email)
    try {
        const isExist = await User.findOne({ username });
        if (isExist) {
          return res.status(400).json({
            message: "User Already Exist",
          });
        }

        const hashedPassword = await generatePasswordHash(password);

        console.log(hashedPassword, "hashed password")

        await User.create({
            username,
            email,
            password:hashedPassword,
        });

        res.json({
            message: "Account has been Created",
          });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Login user

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        const validPassword = await comparePasswordHash(password, user.password);
    }
    catch (err) {
        res.status(500).json(err);
    }

})



module.exports = router;