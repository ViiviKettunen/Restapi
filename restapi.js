const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var mysql = require('mysql');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    var username = req.body.username 
    var password = req.body.password
    var succesful = false

    // Koitetaan hakea tietokannasta
    // IF tietokannasta löytyy samalta riviltä user+pass niin succesful true
    
    // Jos onnistui
    
    if(successful)
    {
        res.sendStatus(200)
    }
    else
    {
        res.sendStatus(403)
    }      
})



app.get('/transactions', (req, res) => {
    var username = req.body.username 

    var successful = false

    // Koitetaan hakea tietokannasta
    // IF tietokannasta löytyy tilitipahtumia käyttäjätunnuksella niin succesful true
    // JA lisää responseen vaikka 5 viimeisintä
    
    if(successful)
    {
        res.sendStatus(200)
    }
    else
    {
        res.sendStatus(400)
    }
        
})

function postNewTransaction(req, res)
{
    // TEe uusi tilitapahtuma nostaessa rahaa
    // KUTSU nostotapahtumasta 
}

// Gettaa tilin saldo
app.get('/balance', (req, res) => {
    var username = req.body.username 

    var successful = false

    // Koitetaan hakea tietokannasta
    // IF tietokannasta löytyy tili käyttäjätunnuksella niin succesful true
    // JA lisää responseen tilin saldo
    
    if(successful)
    {
        res.sendStatus(200)
    }
    else
    {
        res.sendStatus(400)
    }   
})

app.get('/withdraw', (req, res) => {
    var username = req.body.username 
    var amount = req.body.amount

    var successful = false

    // Koitetaan hakea tietokannasta
    // IF tietokannasta löytyy tili käyttäjätunnuksella JA käyttäjällä on tarpeeksi rahaa niin succesful true
    // Sen lisäksi, poista tililtä noston verran
    //Kutsu  ''tee tilitapahtuma'' funktio
    
    if(successful)
    {
        res.sendStatus(200)
    }
    else
    {
        res.sendStatus(400)
    }
        
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})