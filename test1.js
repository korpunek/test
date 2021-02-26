const express = require("express")

const hostname = '127.0.0.1';
const port = 3000

const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) =>
{

    //    res.send("Hello user 1234")

    res.render('index', 
        {
            pageTitle: 'template1 test',
            pageBody1: 'Test szablonu 1',
            pageBody2: 'i coś tam tam'
        })

})

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

