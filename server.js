const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To parse JSON bodies

mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model('Message', messageSchema);

app.post('/send-message', (req, res) => {
    const message = new Message(req.body);
    message.save((err) => {
        if (err) return console.error(err);
        res.send("Message received!");
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
