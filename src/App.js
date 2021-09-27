import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from "./component/Form";
import PageOne from './common/PageOne';
import ViewUser from "./component/ViewUser";
import './App.css';
import { createBrowserHistory } from 'history';

function App() {
  return (
    <Router history = {history}>
    <div>
      <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/viewuser" component={ViewUser} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
export const history = createBrowserHistory();

