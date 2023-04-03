import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/Navbar';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Container } from '@mui/material';
import Trending from './components/Trending/Trending';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Search from './components/Search/Search';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
