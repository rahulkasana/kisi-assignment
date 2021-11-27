import logo from './logo.svg';
import './App.less';
import {Button} from "antd";
import Kisi from "kisi-client"

function App() {
  const getKisi = () =>{
    const kisiClient = new Kisi()
    kisiClient
      .signIn("rkasana00@gmail.com", "Mf@NLdt$.R6E7@T")
      .then(() => {
        kisiClient
          .get("places")
          .then(places => console.log('places---',places))

        kisiClient
          .get("groups")
          .then(place => console.log(place))

        // kisiClient
        //   .post("locks/1/unlock")
        //   .then(result => console.log(result))
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={getKisi} type='primary'>Learn</Button>
      </header>
    </div>
  );
}

export default App;
