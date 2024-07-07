import Nav from './Nav'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() { //- This a component building blockog UI in React
  return (  //> return ( ... );: This is the JSX (JavaScript XML) syntax
    <div className="App">
        <h1>Let's GO</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>} />
          <Route path="/add" element={<h1>Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Product Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; //> exports the App component as the default export from this file.



