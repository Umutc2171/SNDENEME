
import Categories from '../componets/Categories/categories';
import Slider from '../componets/Layout/Slider/Slider';
import Produtc from '../componets/Produtcs/Produtc';

import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
    <Slider />
    <Categories/>
    <Produtc/>  
    </React.Fragment>
   
  )
}

export default HomePage