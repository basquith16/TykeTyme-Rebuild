var React = require('react');
var Router = require('react-router');
var Sched = require('./sched')
var Link = Router.Link;
var Navigation = require('react-router');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <h3>TykeTyme</h3>
          <div className="header">
            <ul className="nav nav-pills pull-center" id="menuItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="1">Schedule</Link>
              </li>
              <li>
                <Link to="2">Crafts</Link>
              </li>
              <li>
                <Link to="3">Activities</Link>
              </li>
              <li>
                <Link to="4">Meals</Link>
              </li>
              <li>
                <Link to="5">What's Around</Link>
              </li>
              <li>
                <Link to="6">Contact Us</Link>
              </li>
            </ul>
          </div>
          <main id="main">
          </main>
        </div>
        {this.props.children}
      </div>
    )
  }
});
