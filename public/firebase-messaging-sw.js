/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCzyuggI8qStDjdwPWgaLc38vbfGx9p_cg",
  authDomain: "manageit-abd99.firebaseapp.com",
  projectId: "manageit-abd99",
  storageBucket: "manageit-abd99.appspot.com",
  messagingSenderId: "1093223049282",
  appId: "1:1093223049282:web:d8eb215489cc23957fe5db"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
