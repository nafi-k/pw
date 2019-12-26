var push = require('web-push');

let vapidKeys = {
  publicKey: 'BAyf5NVMWG7wI_c5hR8GG2KwVgx5ADR_AojX7mJSCE98uirOgfaVHO7WL99cM308dEjLwAzARp-tcf-uax6jKJs',
  privateKey: 'Ws7XPtx7FYRdMReHKkMbUPYGMTfTZWXECyArElTYxxw'
}

push.setVapidDetails('mailto: nafy141625@gmail.com', vapidKeys.publicKey , vapidKeys.privateKey)

let sub = {
	"endpoint":"https://fcm.googleapis.com/fcm/send/c1bPnc7xMXw:APA91bEEQ9Te__U6SfIoK-GDqHFn8WIFa-dNUQRrdqPqb4yw3gc0rwlBaqTd7kD_d09fnX_Gm1ON7yaHUJHq8oJoclHlQfvYSrKF9203sNv8wz8XSxoXGdaT7pBzOQjwv0E-67BqXnD7",
	"expirationTime":null,
	"keys":{"p256dh":"BA8rfb1RfXMN-xwcvz1d7ihOoo3DTe8cWqqJLNelktqWivCvGoZsRpIQLlgHFcVH6g23HFh2B3_fASLnctjhcao",
	"auth":"GM5CsOMxAqrIWwsAFAYCRw"
}}
push.sendNotification(sub, 'Test Message')