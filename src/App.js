import './App.css';
import { BrowserRouter } from 'react-router-dom';
import nav from './nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <nav/>
      <routes>
<route path = "/" element ={<h1>product listing components</h1>} />
<route path = "/add" element ={<h1> add product components</h1>} />
<route path = "/update" element ={<h1>update product components</h1>} />
<route path = "/logout" element ={<h1>logout components</h1>} />
<route path = "/profile" element ={<h1>profile components</h1>} />

      </routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

