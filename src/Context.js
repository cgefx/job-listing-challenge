import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from './api/data.json';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [jobData, setJobData] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.languages.includes(...activeFilters) ||
        item.tools.includes(...activeFilters) ||
        item.level.includes(...activeFilters) ||
        item.role.includes(...activeFilters),
    );

    activeFilters.length >= 1 ? setJobData(filteredData) : setJobData(data);
  }, [activeFilters]);

  const addFilterToList = (type) => {
    if (!activeFilters.includes(type)) {
      setActiveFilters((filters) => [...filters, type]);
    }
  };

  const removeFilterFromList = (type) => {
    if (activeFilters.includes(type)) {
      setActiveFilters((filters) =>
        filters.filter((filter) => filter !== type),
      );
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <Context.Provider
      value={{
        activeFilters,
        addFilterToList,
        removeFilterFromList,
        clearAllFilters,
        jobData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
