self.addEventListener('push', function(event) {
    if (Notification.permission === 'granted') {
        var data = {};
        if (event.data) {
            data = event.data.json();
        }

        event.waitUntil(
            self.registration.showNotification(data.title || 'Notification', {
                body: data.body || 'This is a notification',
                icon: data.icon || 'logo/p'
            })
        );
    }
});
