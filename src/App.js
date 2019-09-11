import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { buyItemAC } from './actions';

//"Map state to props"...don't forget to pass in the state I receive from Redux...as props!
const App = props => {


  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('Made it to handler!', item);
    //I needed props here, but I'm not sure why...without props, but action will get called and display a console.log. So it won't go to the reducer without 'props', but why?
    props.buyItemAC(item);
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>

      <div className="box">
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
  console.log('mSTP console says: ', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
   {buyItemAC})(App); 