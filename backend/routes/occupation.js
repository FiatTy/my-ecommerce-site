const express = require('express');
const router = express.Router();

const  occupation = require('../data/occupation-cat.json'); 

router.get('/', (req, res) => {
    //res.end('{"contactSubject": ["General Enqury","Class","Schedule","Instructor","Price","Location","Other","Apex","valorant"]}');
    res.json(occupation);
})

module.exports = router;