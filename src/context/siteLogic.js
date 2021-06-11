import React, {useState} from 'react';

export const SiteContext = React.createContext();

function SiteLogic(props) {

  const [filter, setFilter] = useState("status");
  const [displayPage, setDisplayPage] = useState("1");
  const siteLogic = {
    filter, sortBy, displayPage, setDisplayPage
  }

  function sortBy(param) {
    setFilter(param);
  }

  // Should make filter logic available to any components
  // that this one is wrapped around
  return (
    <SiteContext.Provider value={siteLogic}>
      {props.children}
    </SiteContext.Provider>
  )

}

export default SiteLogic;
