import logo from "./logo.svg";
import "./App.less";
import { Button } from "antd";
import Kisi from "kisi-client";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const initializeKisi = () => {
    const kisiClient = new Kisi();
    kisiClient.signIn("rkasana00@gmail.com", "Mf@NLdt$.R6E7@T").then(() => {
      kisiClient
        .get("places")
        .then((places) => console.log("places---", places));

      kisiClient.get("groups").then((place) => console.log(place));
    });
    console.log('kisiClient',kisiClient)
  };
  return (
    <Provider store={store}>
      <Button onClick={initializeKisi} type="primary">
        Learn
      </Button>
    </Provider>
  );
}

export default App;
