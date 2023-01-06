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
