import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Poketmon from './routes/Pokemon';
import Pokemons from './routes/Pokemons';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:poketId">
          <Poketmon />
        </Route>
        <Route path="/">
          <Pokemons />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
