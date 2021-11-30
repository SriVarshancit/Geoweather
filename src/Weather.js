import React, { Component, Fragment } from 'react';
 
import Moment from 'react-moment';
import PropTypes from 'prop-types';
 
import convertTemp from './convertTemp';


class CurrentWeather extends Component {
  render() {
    const { isOpen } = this.props;
    return (
     
        {value => {
          const current = value.list[0];
          const condition = current.weather[0].description,
            temperature = convertTemp(current.main.temp),
          
           
            icon = current.weather[0].icon,
            time = convertTime(),
           

          return (
            <Fragment>
              {isOpen && (
                <div className="card card-body bg-secondary">
                  <div className="row">
                    <div className="col-sm-7 mx-auto">
                      <div className="card card-body">
                        <h4 className="text-center m-0 p-0">
                          <Moment format="MMMM Do YYYY" />
                        </h4>

                        <div className="row">
                          <div className="col-md-6 align-self-center">
                            <div className="card-body text-center align-self-center p-0 m-0">
                              <h2 className="">
                                <strong>{temperature}° F</strong>
                              </h2>
                              <p className="my-0">
                                Low: {lowTemp}° | High: {highTemp}°
                              </p>
                              <small>As of: {time}</small>
                            </div>
                          </div>

                          <div className="col-md-6 align-self-center">
                            <div className="card-body align-self-center pt-0 mt-2">
                              <img
                                className="my-0"
                                src={`https://openweathermap.org/img/w/${icon}.png`}
                                alt=""
                              />
                            
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        }}
      
    );
  }
}

CurrentWeather.propTypes = {
  isOpen: PropTypes.bool
};

export default CurrentWeather;