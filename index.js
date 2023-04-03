import express from 'express'

const PORT = 3000

const app = express()

//List of allowed request:

app.get("/hello", (req,res)=> {
    res.send("Hello there!")
})

app.get('/test', (req,res) => {
    res.send('Its working! 🥰')
})



app.listen(PORT, () => {

 console.log(`Listening on http://localhost:${PORT}...`) 
 //console.log(`Listening on http://localhost:" + "PORT" + "...") is the same as line 16 but line 15 is more effecient way to write this.
})