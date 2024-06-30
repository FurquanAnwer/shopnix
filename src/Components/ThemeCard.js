import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Checkmark} from "react-checkmark";
import './button.css'

const ThemeCard = ({ title, image, onApply, isApplied }) => {
  return (
    <div className="col-md-4">
      <div
        className="card h-100"
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div className="card-body">
          <img
            src={image}
            alt={title}
            className="card-img-top img-fluid"
            style={{
              borderRadius: '20px',
              transition: 'transform 0.3s ease-in-out',
              height: '50%', 
              objectFit: 'cover', 
            }}
          />
          <h5 className="card-title p-3 font-arial text-center">{title}</h5>
          <div className="container mt-5 d-flex justify-content-center">
          <button
            className={`btn mt-3 ${isApplied ? 'btn btn-outline-light' : 'btn btn-turquoise btn-lg'}`}
            onClick={onApply}
            disabled={isApplied}
          >
            {isApplied ? <Checkmark size='large' color='turquoise'/> : 'Apply'}
            </button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
