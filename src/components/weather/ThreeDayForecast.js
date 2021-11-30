import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import ThreeDayDisplay from './ThreeDayDisplay';
import PropTypes from 'prop-types';

class ThreeDayForecast extends Component {
  render() {
    const { isOpen } = this.props;

    return (
      <Consumer>
        {value => {
          const { list } = value;
          let dailyForecast = [];

          for (let i = 0; i < list.length; i += 12) {
            dailyForecast.push(list[i]);
          }

          return (
            <Fragment>
              {isOpen && (
                <div className="card card-body bg-info">
                  <div className="row">
                    <div className="col-11 mx-auto">
                      <div className="card card-body">
                        <h4 className="text-center m-0">3 Day Forecast</h4>
                        <ThreeDayDisplay forecast={dailyForecast} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

ThreeDayForecast.propTypes = {
  isOpen: PropTypes.bool
};

export default ThreeDayForecast;
