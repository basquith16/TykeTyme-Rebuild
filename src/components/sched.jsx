var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {
    return (
      <div id='wrap'>
        <div id='external-events'>
          <h4>Draggable Events</h4>
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
      </div>
    )
  }
});
