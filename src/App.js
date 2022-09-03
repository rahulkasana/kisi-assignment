import { Provider } from "react-redux";
// import gtag from "ga-gtag";
import "./App.less";
import store from "./store";
import Routes from "./routes";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IGQX-hhk4Pk3JKBMV4l2QV3-buKyCvc",
  authDomain: "ga-test2-65984.firebaseapp.com",
  projectId: "ga-test2-65984",
  storageBucket: "ga-test2-65984.appspot.com",
  messagingSenderId: "238389476527",
  appId: "1:238389476527:web:250533a28ac9ddabdb685a",
  measurementId: "G-4TWBYCN62T"
};

// Initialize Firebase

function App() {
  // const trackDownloadEvent = () => {
  //   gtag("event", "test_rahul", {
  //     title: "User on website",
  //   });
  // };
  useEffect(() => {
    // trackDownloadEvent();
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // logEvent(analytics, 'notification_received');

  }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
