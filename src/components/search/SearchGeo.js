import React from 'react';
import PropTypes from 'prop-types';

const SearchGeo = ({ findGeolocation }) => {
  return (
    <div className="input-group-prepend" >
      <button
        className="btn btn-secondary btn-lg "
        type="button"
        onClick={findGeolocation}
      >
       
        <span > Use Current Location</span>
      </button>
    </div>
  );
};

SearchGeo.propTypes = {
  findGeolocation: PropTypes.func.isRequired
};

export default SearchGeo;
