import Card from './components/Card'
import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='grid-container'>
        <Switch>
          <Route exact path="/" component={Card} />
        </Switch>
      </div>
      <Route path="/product/:id" component={ProductDetail} />
    </Router>
  );
};


export default App