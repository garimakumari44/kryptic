

import express from 'express'
import Jwt from 'jsonwebtoken'
import { UserModel } from './db'
import cors from 'cors'
import { UserMiddleware } from './middleware'
import { JWTT_PASSWORD } from './config'


declare global {
    namespace Express {
      export interface Request {
        userId?:  string;
      }
    }
}


 


const app = express()
app.use(express.json())
app.use(cors())

app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        })

     res.json({
        message: 'success'
     })
    } catch(e) {
        res.status(411).json({
            message: 'user exists'
        })
    }



    
    
})


app.post("/api/v1/signin", async(req, res) => {
   
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username, 
        password
    })

    if (existingUser) {
        const token = Jwt.sign({
            id: existingUser._id
        }, JWTT_PASSWORD)

        res.json({
            token ,
            
        })
        console.log(username)
        
    } else {
        res.status(403).json({
            message: "Incorrect Signin"
            
        })
    }

})



app.post("/api/v1/dashboard",UserMiddleware, async (req, res) => {

    res.json({
        message : "Logged into the dashboard"
    })
    
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});