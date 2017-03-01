// @flow

// Modules
const express = require('express');

// Local
const { User } = require('./entity/user.js');

// Server
const server = express();

// Users
const users: Array<User> = [];

// POST '/user?name=' (Adds user)
server.post('/user', (req, res) => {
    const { query: { name: userName } } = req;

    // Checks if user with same name exists
    if (users.map(u => u.name).includes(userName)) {
        return res.send(`User: ${userName} already exists!`);
    }

    const user = new User(userName);
    users.push(user);
    return res.send(`User: ${userName} successfully added!`);
});

// GET '/users' (Gets all users)
server.get('/users', (req, res) => {
    res.json(users);
});

// GET '/user/:id' (Gets user by id)
server.get('/user/:id', (req, res) => {
    const {params: {id: userId}} = req;
    res.send(users[userId]);
});

server.listen(3000, 'localhost', () => console.log('Server started at localhost:3000'));