const express = require('express');

const router = express.Router();

router.get('/hi',(req,res,next)=>{
    res.json({hello:true})
})

module.exports = router;
