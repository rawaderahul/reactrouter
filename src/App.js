import logo from './logo.svg';
import './App.css';
import './carousel.css';
import Header from './components/Header';

import Footer from './components/Footer';
import About from './template/About';
import Products from './template/Products';
import Blog from './template/Blog';
import Home from './template/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <main>
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          
          
        </Switch>
        
        <Footer />
      </main>

      
    </div>
    </Router>
  );
}

export default App;
