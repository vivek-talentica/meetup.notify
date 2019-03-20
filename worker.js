self.addEventListener("install", event => {
  console.log("Installing ...");
});

self.addEventListener("activate", event => {
  console.log("Activated ...");
});

self.addEventListener("notificationclose", function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  console.log("Closed notification: " + primaryKey);
});

self.addEventListener("push", function(e) {
  var options = {
    body: e.data.text(),
    vibrate: [300, 100, 300],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  e.waitUntil(self.registration.showNotification("JS Meetup", options));
});
