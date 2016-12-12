import React from 'react';

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var strSecond = this.refs.seconds.value;

    if (strSecond.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSecond, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
