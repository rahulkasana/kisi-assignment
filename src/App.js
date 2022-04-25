import { Provider } from "react-redux";
import gtag from "ga-gtag";
import "./App.less";
import store from "./store";
import Routes from "./routes";
import { useEffect } from "react";

function App() {
  const trackDownloadEvent = () => {
    gtag("event", "test_rahul", {
      title: "User on website",
    });
  };
  useEffect(() => {
    trackDownloadEvent();
  }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
