import './App.css';
import Axios from "axios"
import Bar from './components/layout/Bar';
import Dashboard from './components/layout/Dashboard/Dashboard';
import { Fragment } from 'react';


const check = async() => {
  try {
    const response = await Axios.get('/');

    if(response.status === 200){
      console.log("success")
    }
  } catch (e) {
    console.log(e);
  }
}
function App() {
  check();
  return (
    <div className="App">
      <Fragment>
        <Dashboard/>
      </Fragment>
      <p>여기는 본문</p>
    </div>
  );
}

export default App;
