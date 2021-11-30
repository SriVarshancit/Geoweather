import React from 'react';
import convertTemp from './convertTemp';
import PropTypes from 'prop-types';

const ThreeDayDisplay = ({ forecast }) => {
  const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  return (
    <div className="row">
      {forecast.map(day => {
        let date = new Date(day.dt_txt).getDay();
        let shortDate = day.dt_txt.substring(5, 10);

        return (
          <div className="col-xs-auto mx-auto" key={date}>
            <div
              className="text-center mt-2"
              style={{ width: '150px', height: '225px' }}
            >
              <div className="card-body">
                <h4>{shortDate}</h4>
                <small>{week[date]}</small>
                <br />
                <img
                  src={`https://openweathermap.org/img/w/${
                    day.weather[0].icon
                  }.png`}
                  alt=""
                />
                <p>{convertTemp(day.main.temp)}° F</p>
                <p>{(day.weather[0].description)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ThreeDayDisplay.propTypes = {
  forecast: PropTypes.array.isRequired
};

export default ThreeDayDisplay;