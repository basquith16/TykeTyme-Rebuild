var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

module.exports = React.createClass({
    render: function() {
      return (
 <div className="calBody">
        <div id='wrap'>
          <div idName='external-events'>
            <div className='fc-event'>My Event 1</div>
            <div className='fc-event'>My Event 2</div>
            <div className='fc-event'>My Event 3</div>
            <div className='fc-event'>My Event 4</div>
            <div className='fc-event'>My Event 5</div>
            <p>
              <input type='checkbox' id='drop-remove'/>
              <label for='drop-remove'>remove after drop</label>
            </p>
          </div>
          <div id='calendar'></div>
          <div></div>
        </div>
      </div>
    )
  }
});
