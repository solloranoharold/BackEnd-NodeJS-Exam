const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(cors()); //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.json());
const md5 = require('md5')
const { Users } = require('../db/model')

router.get('/',(req,res)=>{
    res.json([{msg : 'User Side'}])
})

router.post('/registerUser' , async (req,res)=>{ 
    try {
        let msg = ''
        const data = req.body
        data.Username =  data.Username ?  data.Username.toUpperCase() : ''
        let password  =data.Password ?  md5(data.Password) : ''
        data.Password = password
        const isExist = await Users.findOne({where: { Username : data.Username}})
        if(!isExist) {
            await Users.create(data)
            msg ='Create Success'
        }
        else {
            msg ='User Already Exists'
        }
        res.json([{ Message: msg }]);
    } catch (error) {
        // console.log(error.message , 'user registration ')
        res.status(500).send(error);
    }
})


router.post('/updateUser' ,async( req, res ) => { 
    try {
        const toUpdate = req.body;
        const id =  req.body.id     
        await Users.update(toUpdate, { where: { id } }); 
         res.send({Message : "Update Success"})
    } catch (error) {
        // console.log(error , 'user update ')
        res.status(500).send(error);
    }
})

router.post('/deleteUser' ,async(req,res)=>{ 
    try {
        let id = req.body.id      
        await Users.destroy({ where: { id } }); 
        res.send({ Message : "Deleted Success"} )
    } catch (error) {
        // console.log(error , 'user delete ')
        //  res.status(500).send(error);
    }
})

router.post('/deleteMultipleUser' ,async(req,res)=>{ 
    try {
        let ids = req.body.length > 0  ?    req.body : []
        await Users.findAll({ where: { id : ids } }); 
        res.send({Message : "Multiple Delete  Success"})
    } catch (error) {
        // console.log(error.message , 'user delete multiple ')
        //  res.status(500).send(error);
    }
})

router.get('/getAllUser',async(req,res)=>{ 
    try {
        let users = await Users.findAll(); 
        res.send(users)
    } catch (error) {
        // console.log(error.message , 'userg et ')
        // res.status(500).send(error);
    }
})
module.exports = router 