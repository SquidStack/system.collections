import logo from './logo.svg';
import './App.css';
import {HttpClient} from '@squidstack/system.collections'

function App() {
  var client = new HttpClient();
  async function makeApiCall(){
    try{
    
    var res = await client.get("https://dummyjson.com/products")
    console.log(res);
    }catch(err){
      console.log(err)
    }
  }

  async function postApiCall(){
    try{
      var data = {
        title: 'I am in love with someone.',
        userId: 5
      }
      var res = await client.post("https://dummyjson.com/posts/add",data)
      console.log(res);
      }catch(err){
        console.log(err)
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => makeApiCall()}>make api call</button>

        <button onClick={() => postApiCall()}>make post api call</button>
      </header>
    </div>
  );
}

export default App;
