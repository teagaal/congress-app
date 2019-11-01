import React from 'react';
import './Filter.scss';

const Filter = ({onChange}) => {

  return(
    <div className="filter-container">
      <div>
      <label htmlFor="name">
        <span>Name</span>
      </label>
      <input type="search" id="name" name="name" onChange={onChange}/>
    </div>
    <div>
      <label htmlFor="last-name">
        <span>Last Name</span>
      </label>
      <input type="search" id="last-name" name="last-name" onChange={onChange}/>
    </div>
    <div>
      <label htmlFor="party">
        <span>Party</span>
      </label>
      <input type="search" id="party" name="party" onChange={onChange}/>
    </div>
    <div>
      <label htmlFor="state">
        <span>State</span>
      </label>
      <input type="search" id="state" name="state" onChange={onChange}/>
    </div>
    </div>
  )
};

export default Filter;
