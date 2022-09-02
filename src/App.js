import { Provider } from "react-redux";
// import gtag from "ga-gtag";
import "./App.less";
import store from "./store";
import Routes from "./routes";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc1B36_vU-hYqRkKaWkKnzVjHaG9ky-wM",
  authDomain: "ga-test-ad80c.firebaseapp.com",
  projectId: "ga-test-ad80c",
  storageBucket: "ga-test-ad80c.appspot.com",
  messagingSenderId: "1096125003587",
  appId: "1:1096125003587:web:1fe29b149885dbfe95e1f6",
  measurementId: "G-9RR1TXJ4VF"
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
  }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
