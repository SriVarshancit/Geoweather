import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';

const Header = () => {
  return (
    <Consumer>
      {value => {
        const { city, country, error, loading } = value;

        return (
          <div className="bg-primary">
            <div
              className={classnames(
                'card-body bg-primary text-white text-center',
                { 'bg-danger': error }
              )}
            >
              {loading ? (
                <Spinner color="text-white" />
              ) : (
                <h1 className="display-4" style={{ fontSize: '36px' }}>
                  <strong>
                    {city ? `${city}, ${country}` : 'Weather Conditions'}
                  </strong>
                </h1>
              )}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Header;
