const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }

    logError(errorMessage) {
        this.emit('error', `Error: ${errorMessage} ${Date.now()}`);
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.on('error', error => {
    console.log('Error:', error);
});

logger.log('First')
logger.logError('An error occurred');
logger.log('Second')