import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageDisplay from '../Components/ImageDisplay';
import BackgroundWrapper from '../Components/BackgroundWrapper';

const Dashboard = () => {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const { productType, category, subCategory } = useSelector((state) => state.details);
  const productCategory = useSelector((state) => state.product.productCategory);
  const productDescription = useSelector((state) => state.product.productDescription);
  const code = useSelector((state) => state.product.SKUCode);
  const listPrice = useSelector((state) => state.pricing.listPrice);
  const netPrice = useSelector((state) => state.pricing.netPrice);

  return (
    <BackgroundWrapper>
        <div className="d-flex justify-content-center">
      <div className="container mt-5">
        <h1 className="text-center">Dashboard</h1>

        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6 p-5">
            <ImageDisplay />
          </div>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Selected Theme</h5>
                <p className="card-text">{selectedTheme}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Details</h5>
                <p className="card-text"><strong>Product Type:</strong> {productType}</p>
                <p className="card-text"><strong>Category:</strong> {category}</p>
                <p className="card-text"><strong>Sub-Category:</strong> {subCategory}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <p className="card-text"><strong>Product Name:</strong> {productCategory}</p>
                <div className="border border-danger p-2" style={{ textAlign: 'justify' }}>
                  <div dangerouslySetInnerHTML={{ __html: productDescription }} />
                </div>
                <p className="card-text"><strong>SKU Code:</strong> {code}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <p className="card-text"><strong>List Price:</strong> <strike>{listPrice}</strike></p>
                <p className="card-text"><strong>Net Price:</strong> {netPrice}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </BackgroundWrapper>
    
  );
};

export default Dashboard;
