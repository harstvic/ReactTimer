import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should set state to started and count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        done();
      }, 2001);
    });

    it('should set timer on pause', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('paused');
      }, 2001);

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 2001);
    });

    it('should set state to paused and clear timer', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() =>{
        timer.handleStatusChange('stopped');
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(0);

        var $el = $(ReactDOM.findDOMNode(timer));
        var $startButton = $el.find('button:contains(Start)');
        expect($startButton.length).toBe(1);
        done();
      }, 2001);
    });
  });
})
