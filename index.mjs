import express from "express";
const app = express();
const port = 3000;
import customers from './routes/customers.mjs';

//MIDDLEWARE
app.use(express.json()) // this allows is to use req.body
app.use('/customers', customers);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});