import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletedTodo from "./component/CompletedTodo";
import Nav from "./component/Nav";
import TodoList from "./component/TodoList";
import UserForm from "./component/UserForm";

function App() {
  return (
    <Router>
      <div className="bg-green-600">
        <Nav />
        <Switch>
          <Route exact path="/" component={UserForm} />
          <Route exact path="/show" component={TodoList} />
          <Route exact path="/show/all" component={TodoList} />
          <Route path="/show/completed" component={CompletedTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
