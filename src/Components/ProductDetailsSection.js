import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProductType, setCategory, setSubCategory } from '../Slice/detailsSlice';
import { FocusContext } from '../Contexts.js/FocusContext';



const ProductDetailsSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productType, category, subCategory } = useSelector((state) => state.details);
    const { setFocusedField } = useContext(FocusContext);
  
    const handleNext = () => {
      navigate('/ProductCategory');
    };
  
    const handleBack = () => {
      navigate('/');
    };
    
  return (
    <>
            <h2>Lets add a type, category and sub-category</h2>  
      <div className="form-group">
        <label><b>Product Type:</b></label>
        <input
          type="text"
          className="form-control"
          value={productType}
          onChange={(e) => dispatch(setProductType(e.target.value))}
          onFocus={() => setFocusedField('productType')}
          onBlur={()=>setFocusedField('')}
          placeholder='eg - books'
        />
      </div>
      <div className="form-group">
        <label><b>Category: (optional)</b></label>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          placeholder='eg - Academic book'
          onFocus={() => setFocusedField('category')}
          onBlur={()=>setFocusedField('')}
        />
      </div>
      <div className="form-group">
        <label><b>Sub-Category: (optional)</b></label>
        <input
          type="text"
          className="form-control"
          value={subCategory}
          onChange={(e) => dispatch(setSubCategory(e.target.value))}
          placeholder='eg - Medical book'
          onFocus={() => setFocusedField('subCategory')}
          onBlur={()=>setFocusedField('')}          
        />
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-secondary" onClick={handleBack}>Back</button>
        <button className="btn btn-success" onClick={handleNext}>Next</button>
      </div>
    </>
  
  )
}

export default ProductDetailsSection