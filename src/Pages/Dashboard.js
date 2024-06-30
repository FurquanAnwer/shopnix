import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const { productType, category, subCategory } = useSelector((state) => state.details);
  const productCategory = useSelector((state) => state.product.productCategory);

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Selected Theme</h5>
          <p className="card-text">{selectedTheme}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Product Details</h5>
          <p className="card-text"><strong>Product Type:</strong> {productType}</p>
          <p className="card-text"><strong>Category:</strong> {category}</p>
          <p className="card-text"><strong>Sub-Category:</strong> {subCategory}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
