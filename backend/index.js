const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {User} = require('./models/User.js');
const {data} = require('./sampleFollowers.js');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
require('dotenv').config()

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(methodOverride('_method'));
//register-user 
app.post('/api/register', async (req,res)=>{
  const user = req.body;
  const password = user.password;
  const saltRounds = 10;
  user.password =  await bcrypt.hash(password, saltRounds);
  const newUser = {...user,followers:[],numberOfFollowers:data.length};
  data.forEach((follower)=>{
    newUser.followers.push(follower);
  })
   const mongoUser = await User.create(newUser);
   console.log(mongoUser);
   mongoUser.password = '';
   res.json(mongoUser).status(200);
});

//login-user
app.post('/api/login',async (req,res)=>{
    const checkUser = req.body;
    console.log(checkUser);
    if(checkUser === null) res.json({message:"Please write something!!!"}).status(400);
    const user = await User.findOne({email:checkUser.email});
    console.log(user);
    let valid = false;
    if(user.email === null) res.json({message:"Wrong Username or Password"}).status(300);
    else{
         valid = await bcrypt.compare(checkUser.password, user.password);
    }

    if(valid){ res.json(user).status(200);}
    else res.json({message:"Wrong Username or Password"}).status(300);

})

//update user profile
app.put('/api/update',async (req,res)=>{
    const checkUser = req.body;
    if(checkUser.password === undefined)
    {
        const doc = await User.findOneAndUpdate({email:checkUser.email}, checkUser, {
            returnOriginal: false
          });
        if(doc === undefined) res.json({message:"Not Found!!!"}).status(400);
        else {doc.password = '';
            res.json(doc).status(200);}
    }
    else res.json({message:"Cannot Change Password"}).status(400);
});





app.listen('8080',()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{console.log("Database Connected!!!")}).catch((e)=>{console.log(e)});
    console.log('Listening on port 8080');
})