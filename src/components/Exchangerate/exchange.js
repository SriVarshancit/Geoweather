import * as React from 'react';
import './exchange.css';
import FxItem from './fxitem';
import { fetchExchangeRates, searchFxRates } from './fxservice';

function ExchangeRateApp() {
  const [rates, setRates] = React.useState(null);
  const [ratesBase, setRatesBase] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  const onSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    let componentIsMounted = true;

    const getFxData = () => {
      fetchExchangeRates()
        .then((data) => {
          console.log('fx data:', data);
          if (componentIsMounted) {
            setRates(data.rates);
            setRatesBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

 
    getFxData();

    const fetchInterval = setInterval(getFxData, 100 * 60);

    return () => {
      clearInterval(fetchInterval);
      componentIsMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchResults(searchFxRates(rates, searchTerm));
    } else {
      setSearchResults(rates);
    }
  }, [searchTerm, rates]);

  return (
    <div className="exchangebox" style={{padding:"450px"}} >
     
      <input
        style={{width:"630px"}}
        className="input"
        placeholder='Search...'
        onChange={onSearch}
      />
      {searchResults
        ? Object.keys(searchResults).map((key) => (
            <FxItem
              key={key}
              fxSymbol={key}
              fxRate={searchResults[key]}
              ratesBase={ratesBase}
            />
          ))
        : []}

        
    </div>
  );
}

export default ExchangeRateApp;