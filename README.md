# Kurami - Command manager
Kurami is a console command manager similar to the command system of Symfony.

## Why Kurami ?
Nice question, and I have absolutly no answer, 
in reality it's just birth because needed to setup fixture in a project and wanted to have something clean.
But you will probably find a better utility than me ^^

## Installation
You can install it by using NPM locally :
```bash
npm install kurami
```
or globally :
```bash
npm install -g kurami
```

## Setup
You can setup Kurami by creating a file named `kurami.json` 
in your project root directory to define the path to your command folder
```json
{
  "commandsPath": "./path/to/your/commands/folder"
}

```

## How it works ?

You can create a command file with this structur :
```js
const { BaseCommand } = require('kurami');

class TestCommand extends BaseCommand {
    constructor() {
        super({
            name: 'test:test',
            description: 'Test command'
        });
    }

    async run() {
        console.log('Test command');
    }
}

module.exports = TestCommand;

```

### If installed globally
Then run in your project ``kurami {commandName}`` in your project folder

### If installed locally
Then run ``./node_modules/.bin/kurami {commandName}`` in your project folder or add a npm script to run it more easily :
```json
{
  "scripts": {
    "kurami": "kurami"
  }
}
```

Then run ``npm run kurami {commandName}``

And done !

## Disclaimer
It's an experimental version, some problem persist like sometime the command didn't exit after is end.
I'm fully open for suggestion and more ! :D

## Support me
If you like my work, you can support me by buying me a coffee and/or following me on twitter :D

<a href='https://ko-fi.com/O4O81EAUF' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
<a href="https://www.buymeacoffee.com/nesmon" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 36px !important;" ></a>
<a href="https://twitter.com/MaidNenes" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/twitter/follow/Thomasbnt_?color=%231DA1F2&label=Follow%20me&labelColor=white&logo=Twitter&style=for-the-badge" alt="My Twitter profile" alt="My Twitter profile"/></a>