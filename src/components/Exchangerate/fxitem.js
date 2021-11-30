import React from 'react'
 
import './exchange.css';
import '.../../../src/App.css';

const FxItem = ({ fxSymbol, fxRate, ratesBase }) => {
  return (
   <>
    <div className="card" style={{width:"490px"}} >
      <strong>
        {fxSymbol}/{ratesBase}
      </strong>
      </div><br></br>
       <span className="rate">{fxRate}</span>
     </>  
  );
};

export default FxItem;