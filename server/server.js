const express = require('express')
const cors = require('cors')

const app = express()// CREATES AN EXPRESS SERVER INSTANCE

app.use(express.json())// EXPRESS HANDLES THE TRANSLATION TO AND FROM JSON
app.use(cors())// ALLOW REQUESTS FROM OTHER PORT NUMBERS

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']
//ENDPOINTS***********************************
// app.get('/', (req, res) => {
//     let welcome = 'Yo yo yo whats good homie😁'
//     console.log('Inside an endpoint')
//     res.status(200).send(welcome)
// })
app.get('/api/inventory', (req, res) =>{
    console.log('___REQUEST___', req.query.item)
    if(req.query.item){
        const filteredItems = inventory.filter((product) =>{
            return product.toLowerCase().includes(req.query.item.toLowerCase())
        })
        res.status(200).send(filteredItems)
    }else{
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) =>{
    let {index} = req.params
    console.log(req.params)
    let item = inventory[index]
    res.status(200).send(item)
})
app.listen(5050, () => console.log('server is running on port 5050'))