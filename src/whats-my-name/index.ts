import { Callback, Context, Handler } from 'aws-lambda';

const random = require('random-name');

const handler: Handler = function (e: any, ctx: Context, cb: Callback) {
    console.log('processing event: %j', e)
    cb(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'My name is': random.first()})
    })
}

exports.handle = handler;