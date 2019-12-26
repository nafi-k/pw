self.addEventListener('push', () => {

	self.registration.sendNotification('Test Message', function e{});

	});
