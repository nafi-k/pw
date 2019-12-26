var push = require('web-push');

let vapidKeys = {
  publicKey: 'BAyf5NVMWG7wI_c5hR8GG2KwVgx5ADR_AojX7mJSCE98uirOgfaVHO7WL99cM308dEjLwAzARp-tcf-uax6jKJs',
  privateKey: 'Ws7XPtx7FYRdMReHKkMbUPYGMTfTZWXECyArElTYxxw'
}

push.setVapidDetails('mailto: nafy141625@gmail.com', vapidKeys.publicKey , vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'Test Message')