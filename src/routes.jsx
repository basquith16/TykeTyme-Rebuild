var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Sched = require('./components/sched');
var Crafts = require('./components/crafts');
var Activities = require('./components/activities');
var Meals = require('./components/meals');
var Map = require('./components/map');
var Contact = require('./components/contact');


module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="1" component={Sched} />
      <Route path="2" component={Crafts} />
      <Route path="3" component={Activities} />
      <Route path="3" component={Meals} />
      <Route path="3" component={Map} />
      <Route path="3" component={Contact} />
  </Route>
  </Router>
)
