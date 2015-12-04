var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;var React = require('react');
var Routes = require('./routes');

var Hello = React.createClass({
  render: function () {
    return <h1>{this.props.children}</h1>
  }
})

var Child1 = React.createClass({
  render: function () {
    return <h1>I'm Child1!</h1>
  }
})

var routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Hello}>
    <Route path="1" component={Child1} />
    </Route>
    // <Route path="2" component={Crafts}></Route>
    // <Route path="3" component={Activities}></Route>
    // <Route path="3" component={Meals}></Route>
    // <Route path="3" component={Map}></Route>
    // <Route path="3" component={Contact}></Route>
  </Router>
)

// var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
