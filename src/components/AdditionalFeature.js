import React from 'react';

const AdditionalFeature = props => {

  return (
    <li>
      
      <button className="button" onClick={() => props.buyItem({
        id: props.feature.id,
        name: props.feature.name, 
        price: props.feature.price
        })}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
