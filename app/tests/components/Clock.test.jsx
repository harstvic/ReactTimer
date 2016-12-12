import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      var expected = '01:02';

      expect(actualText).toBe(expected);
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    })
  });

  describe('formatSeconds', () => {
    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    })
  });

});
