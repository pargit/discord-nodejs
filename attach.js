'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const { config } = require("dotenv");


// Create an instance of a Discord client
const { Client, MessageAttachment } = require('discord.js');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
const client = new Client();

config({
    path: __dirname + "/.env"
});

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is '!rip'
  if (message.content === '!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
//client.login('NjkzNDkzMDYxOTYzMDg4MDEz.Xn94Og.h574TQcHPAC5EsmkVMZ3a-DHqy4');
client.login(process.env.TOKEN);