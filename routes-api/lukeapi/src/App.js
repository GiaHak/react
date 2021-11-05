
// import logo from './logo.svg';
// import './App.css';
import SearchForm from './components/SearchForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import View from './components/View';

function App() {
  return (

    <BrowserRouter>

      <div className="App container mt-5 ">

        <h1>Hello ApiWalker</h1>
        <SearchForm></SearchForm>

        <Switch>

          <Route exact path = "/:lists/:id">
            <View></View>
          </Route>
          
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
