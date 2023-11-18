import express from "express";
const app = express();
const port = 3000;
import customers from './routes/customers.mjs'; 

//MIDDLEWARE
app.use('/restaurants', restaurants);

// Error Handling Middleware
app.use((err, req, res, next)=>{
    res.status(500).send("Something went wrong!");
});

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});