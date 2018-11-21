const express = require('express');

const app = express();

app.get('/', (res, req) => {
    req.status(200).send({Hello: "world!"});
});



app.listen(3000, () => {
    console.log("Open at localhost:3000");
});