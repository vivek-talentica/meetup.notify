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

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(
      "https://www.yammer.com/talentica.com/#/Threads/show?threadId=71690421649408"
    )
  );
});

self.addEventListener("push", function(e) {
  var options = {
    body: e.data.text(),
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    vibrate: [300, 100, 300],
    requireInteraction: true,
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  e.waitUntil(self.registration.showNotification("JS Meetup", options));
});
