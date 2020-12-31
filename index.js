const { Plugin } = require('powercord/entities');

module.exports = class Mute extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'spam',
      description: 'Mute user for spam',
      usage: '{c} <user to mute>',
      executor: (args) => ({
        send: true,
        result: `-m ${args.toString()} 3h Spamming.`
      })
    });
    powercord.api.commands.registerCommand({
      command: 'nsfw',
      description: 'Mute user for nsfw Usage: ',
      usage: '{c} <user to mute>',
      executor: (args) => ({
        send: true,
        result: `-m ${args.toString()} 6h Posting NSFW Content.`
      })
    });
    powercord.api.commands.registerCommand({
      command: 'o',
      description: 'Mute a user for OffTopic',
      usage: '{c} <user to mute>',
      executor: (args) => ({
        send: true,
        result: `-m ${args.toString()} 3h Rule 5; Use the channels for their correct purpose.`
      })
    });
    powercord.api.commands.registerCommand({
      command: 'beg',
      description: 'get rid of someone for begging',
      usage: '{c} <user to yeet for begging.>',
      executor: (args) => ({
        send: true,
        result: `;;begging yeet ${args.toString()}`
      })
    });
    powercord.api.commands.registerCommand({
      command: 'pasta',
      description: 'Mute user for pasta Usage: ',
      usage: '{c} <user to mute>',
      executor: (args) => ({
        send: true,
        result: `-m ${args.toString()} 8h Copy Pasta.`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('spam');
    powercord.api.commands.unregisterCommand('nsfw');
    powercord.api.commands.unregisterCommand('o');
    powercord.api.commands.unregisterCommand('beg');
    powercord.api.commands.unregisterCommand('pasta');
  }
};


