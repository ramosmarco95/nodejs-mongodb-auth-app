import { Container, Row, Col } from 'react-bootstrap';
import Register from './Register';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import Account from './Account';
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;
