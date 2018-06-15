import { Callback, Context, Handler } from 'aws-lambda';

const handler: Handler = function (e: any, ctx: Context, cb: Callback) {
  console.log('processing event: %j', e)
  cb(null, { 
    statusCode : 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({Hello: 'World'})
  })
}

exports.handle = handler;
