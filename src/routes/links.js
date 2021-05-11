const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/add',(req,res) => {
    res.render('links/add');
});

router.post('/add', async (req,res) =>{
    console.log(req.body);
    const {username, password} = req.body;
    const newLink = {
        username,
        password
    } ;
    console.log(newLink);
    await pool.query('SELECT id_location FROM USERS WHERE username = ? AND password = ?', [username, password]);
    res.redirect('/links');
});

router.get('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM BALANCE_TABLE WHERE ID_LOCATION = 1 AND MONTH(CREATION_DATE) = MONTH(CURDATE()) AND YEAR(CREATION_DATE) = YEAR(CURDATE())');
    console.log(links);
    res.render('links/list');
});

router.get('/list', async(req,res)=>{
    console.log('hola');
    const {operation_type, description,amount} = req.body;
    const newRecord = {
        operation_type,
        description,
        amount
    } ;
    await pool.query('INSERT INTO BALANCE_TABLE (CREATION_DATE,OPERATION_TYPE,DESCRIPTION,AMOUT,ID_LOCATION,ID_USER) VALUES(CURDATE(),1,"ALGO",100,1,1)');

});

module.exports = router;