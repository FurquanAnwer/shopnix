import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flowchart from '../Components/Flowchart';
import BackgroundWrapper from '../Components/BackgroundWrapper';
import ProductDetailsSection from '../Components/ProductDetailsSection';
import { FocusProvider } from '../Contexts.js/FocusContext';


const ProductDetails = () => {
  
//   const handleFocus = (field) => {
//     setFocusedField(field);
//   };

//   const handleBlur = () => {
//     setFocusedField('');
//   };

  return (
    <BackgroundWrapper>
        <div className="container mt-5 bg-white w-75">
  <div className="row p-3 w-100">
    <FocusProvider>
    <div className="col-md-8 border-right border-primary pr-4 pt-5">
        <ProductDetailsSection/>
    </div>
    <div className="col-md-4 bg-white pl-1">
        <Flowchart/>
    </div>

    </FocusProvider>
    
  </div>
</div>
    </BackgroundWrapper>
    

  );
};

export default ProductDetails;
