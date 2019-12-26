var push = require('web-push');

let vapidKeys = {
  publicKey: 'BAyf5NVMWG7wI_c5hR8GG2KwVgx5ADR_AojX7mJSCE98uirOgfaVHO7WL99cM308dEjLwAzARp-tcf-uax6jKJs',
  privateKey: 'Ws7XPtx7FYRdMReHKkMbUPYGMTfTZWXECyArElTYxxw'
}

push.setVapidDetails('mailto: nafy141625@gmail.com', vapidKeys.publicKey , vapidKeys.privateKey)

let sub = {
	     "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeBGJUtd6WMoOgNAKgud6WUTv_CdagtCklz2Y8injhtBNo7HnYv3JbSna0ETfLeSyDmWQPblIxECzfiSbRnEsopfl2soN2mKC6-D_iaMmj1ai82sqU6ciAAIrAkdc4UIGoVVVPS6PXzIomL0J-q-Qk1J2IpReb7HyO342qkn1pG3YYIqY",
         "keys":{"auth":"EX6Q3EQKI5-q-SfeGdT9ew",
         "p256dh":"BH3ghb-FdSLiAE-GdU7VQ2MA16SKywADeHnqDVWoW4GBTcjPSzCcoHoW48Q88reX2W3pQsCAa2JYIJ-0pJdpvPk"
     }}
push.sendNotification(sub, 'Test Message')