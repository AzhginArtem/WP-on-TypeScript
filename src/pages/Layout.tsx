import Header from "./../Components/Header/Header";
import './../App.sass'
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
