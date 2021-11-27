import "./App.less";
import Kisi from "kisi-client";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

function App() {
  const initializeKisi = () => {
    const kisiClient = new Kisi();
    kisiClient
      .signIn("rkasana00@gmail.com", "Mf@NLdt$.R6E7@T")
      .then((result) => {
        console.log("result ----", result);
        //secret - 45c6706440a91799000de97e6bf9a22e
        // token - 45c6706440a91799000de97e6bf9a22e
        kisiClient
          .get("places")
          .then((places) => console.log("places---", places));

        kisiClient.get("groups").then((place) => console.log(place));
      });
    console.log("kisiClient", kisiClient);
  };
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
