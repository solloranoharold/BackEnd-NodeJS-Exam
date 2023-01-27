const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(cors()); //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.json());
const md5 = require('md5')
const { Users } = require('../db/model')

router.get('/',(req,res)=>{
    res.status(200).json('Login Side')
})

router.get('/:username/:password',async(req,res)=>{ 
    try {
        let username = req.params.username.toUpperCase()
    let password = md5(req.params.password)
    const isExist = await Users.findOne({where: { Username : username}})
    if(!isExist) res.send({Message : 'Account Not Exists!'})
    else{
        console.log(isExist.id);
        if(isExist.Password == password){
            res.send(isExist)
        }else{
            res.send({Message : 'Incorrect Password!'})
        }
    }
    } catch (error) {
        console.log(error.message , 'login ')
        res.status(500).send(error);
    }
})


module.exports = router 