import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Poketmon from './routes/Poketmon';
import Poketmons from './routes/Poketmons';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:poketId">
          <Poketmon />
        </Route>
        <Route path="/">
          <Poketmons />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
