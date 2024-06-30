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
      <div className="container mt-5 bg-white p-4">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-7 d-flex align-items-center">
            <div className="p-4 w-100" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
              <div style={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden', padding: '10px' }}>
                <BasicDetails />
                <PricingDetails />
              </div>  
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-5 d-flex align-items-center">
            <div className="p-4 w-100">
              <ProductInfo />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
            <button className="btn btn-success" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default ProductCategory;
