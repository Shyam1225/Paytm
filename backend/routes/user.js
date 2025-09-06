const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string().min(3).max(30).trim().lowercase().required(),
    password: zod.string().min(6).required(),
    firstName: zod.string().trim().max(50).required(),
    lastName: zod.string().trim().max(50).required(),
})

router.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if(!obj.success) {
        return res.json({
            message: "Email already taken / Incorect data",
        })
    }
    const user = User.findOne({
        username: body.username
    })

    if(user._id) {
        return res.json({
            message: "Email already taken / Incorect data",
        })
    }

    const dbuser = await User.create(body);
    const token = jwt.sign({
        UserId: dbuser._id,
    },JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })

})