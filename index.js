const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')["development"]);
const server = express();
const port = 3000;
const { 
    getItem,
    deleteItem,
    updateItem,
    addItem,
    checker
} = require('./controller.js');

server.use(cors());
server.use(express.urlencoded({extended: true}))
server.use(express.json());

server.listen(port, '0.0.0.0', () => console.log(`Server is listening at port ${port}`));

server.get('/', (req, res) => {
    res.send('The server is up and running!')
});

//-CREATE------------------------------------------------------
server.post('/addItem', (req, res) =>{
    const {table} = req.body

    addItem(table, req.query).then((data) => {
        res.status(200).send(data)
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item'})
    })
})
//--------------------------------------------------------------


//-READ---------------------------------------------------------
server.get('/music', (req, res) =>{
    getItem(req.query).then((data) => {
        console.log(req.query)
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to read item'})
    })
})
//--------------------------------------------------------------


//-UPDATE-------------------------------------------------------
server.patch('/update', (req, res) => {

    const { table, id } = req.body;

    updateItem(table, id, req.query)
    .then(data => {
        res.json(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send('Failed to update Item');
    })

})
//--------------------------------------------------------------


//-DELETE-------------------------------------------------------
server.delete('/delete', (req, res) => {
    const {table, id} = req.body

    deleteItem(table, id).then((data) =>{
        console.log(`Successful Deletion from '${table}' with an id of '${id}'`)
        res.json(data);
        
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete Item'})
    })
})
//--------------------------------------------------------------

//-CHECKER------------------------------------------------------
server.post('/login', (req, res) =>{
    const {name, email, password} = req.body

    checker(name, email, password).then((data) => {
        if(data == false){
            res.status(500).json({ error: 'error lol'})
        } else {
            res.status(200).send(data)
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'error lol'})
    })
})
//--------------------------------------------------------------