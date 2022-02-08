const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var id = 0;
var players = [];

//UTILS
function didHeWin(a, b){
    return (pgcd(a,b)==1)
}

function pgcd(a, b)
{
    // Everything divides 0
    if (a == 0 || b == 0)
        return 0;
     
    // Base case
    if (a == b)
        return a;
     
    // a is greater
    if (a > b)
        return pgcd(a - b, b);
             
    return pgcd(a, b - a);
}

app.post('/', (req, res) => {

    let currrentId;

    if(req.body.id == null){

        currrentId = id;

        let player = {
            id: id,
            credit: 300,
            creditHistory: [],
            numberOfTimesNegative: 0
        }
        id++

        players.push(player)
    } else {
        currrentId = req.body.id
    }

    let randomNumber = Math.round((Math.random()*198)+2)
    players[currrentId].creditHistory.push({credit:players[currrentId].credit})

    players[currrentId].credit = players[currrentId].credit - 10

    if(players[currrentId].credit<0)
    {
        players[currrentId].numberOfTimesNegative = players[currrentId].numberOfTimesNegative + 1;
    }

    if(didHeWin(randomNumber, req.body.number)){
        players[currrentId].credit = players[currrentId].credit + 100 
    }

    console.log("Player " + currrentId + " has a balance of" + players[currrentId].credit )

    if(players[currrentId].credit>1000){
        console.log("Player " + currrentId + " won in " + (players[currrentId].creditHistory.length+1) + " with " + (players[currrentId].numberOfTimesNegative)+ " times in negative")

        res.end("finish")
    }

    res.end(currrentId+"")
})

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})