const express = require('express');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h2>Application's Home Page</h2><br>Name : Aminul Islam<br>Roll: 1910676129 <br/>
    Department of Computer Science and Engineering, <br/> University of Rajshahi `);
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log(`Server is running..... at http:/localhost/${PORT}`);
});