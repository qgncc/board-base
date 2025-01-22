import { Game, Main } from "pages";
import { Switch, Route } from "wouter";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/game/:id">
          <Game />
        </Route>
      </Switch>
    </div>
  );
};
