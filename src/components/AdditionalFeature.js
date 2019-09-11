import React, {useState} from 'react';

const AdditionalFeature = props => {
  const [feature, setFeature] = useState('');

  return (
    <li>
      
      <button className="button" onClick={() => props.buyItem({name: props.feature.name, price: props.feature.price})}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
