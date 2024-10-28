const express = require('express')
const app = express()
const Client = require('./bot')
const client = new Client()
const config = require('./config.json')
require('dotenv').config()
client.login(process.env.TOKEN)

client.on('ready', () => {
    app.get('/', (req, res) => {
        res.send('/userid to return user avatar')
    })
    app.get(`/:userid`, (req, res) => {
        client.users.fetch(req.params.userid).then((user) => {
            res.redirect(user.displayAvatarURL({forceStatic:config.Dynamic, extension:config.extension, size: config.size}))
        })
    })
    
        
    
    app.listen('8080',() => {
        console.log('connected on port 8080')
    })
})
