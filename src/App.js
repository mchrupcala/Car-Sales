import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { buyItemAC, removeFeatureAC } from './actions';

//"Map state to props"...don't forget to pass in the state I receive from Redux...as props!
const App = props => {


  const buyItem = item => {
    //I needed props here, but I'm not sure why...without props, but action will get called and display a console.log. So it won't go to the reducer without 'props', but why?
    props.buyItemAC(item);
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatureAC(item)
  };


  return (
    <div className="boxes">
      <div className="box left-box">
        <Header car={props.car} />
        <AddedFeatures car={props.car}
        removeFeature={removeFeature} />
      </div>

      <div className="box right-box">
        <AdditionalFeatures 
          store={props.store}
          buyItem={buyItem} 
          />
        <Total car={props.car} 
        additionalPrice={props.additionalPrice}
         />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
   {buyItemAC, removeFeatureAC})(App); 