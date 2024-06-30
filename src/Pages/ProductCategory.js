import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingDetails from '../Components/PricingDetails';
import BasicDetails from '../Components/BasicDetails';
import ProductInfo from '../Components/ProductInfo';
import BackgroundWrapper from '../Components/BackgroundWrapper';

const ProductCategory = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/ProductDetails');
  };
  
  return (
    <BackgroundWrapper>
        <div className="container mt-5 bg-white w-75 h-50">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="p-3" >
                      <div className="p-3 scrollable-section">
                        <BasicDetails />
                        <PricingDetails />
                      </div>  
                    </div>
                </div>
            <div className="col-md-6 d-flex justify-content-center">
                {/* <div className="text-center justify-content-center"> */}
                <ProductInfo />
                {/* </div> */}
            </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2 d-flex justify-content-between">
            <button className="btn btn-secondary p-2" onClick={handleBack}>Back</button>
            <button className="btn btn-success p-2" onClick={handleNext}>Next</button>
          </div>
        </div>
        </div>
    </BackgroundWrapper>

  
  );
};

export default ProductCategory;
