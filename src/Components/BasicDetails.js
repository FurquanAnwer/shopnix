import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setProductCategory,setProductDescription,setSKUCode } from '../Slice/productCategorySlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from './ImageUploader';

const BasicDetails = () => {
    const dispatch = useDispatch();
    const {productCategory,productDescription,SKUCode} = useSelector((state) => state.product);
    const [inputEnabled, setInputEnabled] = useState(false);
    
    const toggleInputArea = () => {
      setInputEnabled(!inputEnabled);
    };

    const handleDescriptionChange = (value) => {
      dispatch(setProductDescription(value));
    };
    
  return (
    <div className='p-2'>  
        <h2>Lets add your first product</h2>
      <h4>Basic Details</h4>
      <div className="form-group">
        <label><b>Product Name:</b></label>
        <input
          type="text"
          className="form-control"
          value={productCategory}
          onChange={(e) => dispatch(setProductCategory(e.target.value))}
          placeholder='eg - anatomy'
        />
      </div>
      <div className="form-group">
        <label><b>Product Description:</b></label>
        <div style={{ maxWidth: '100%' }}>
        <ReactQuill 
        value={productDescription} 
        onChange={handleDescriptionChange}
        placeholder='Type here....'
        modules={{
          toolbar: [
            [{ 'size': [] }],
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],            
          ]
        }}
        formats={[
          'size',
          'bold', 'italic',          
        ]}
      />
        </div>        

      </div>
      <div>
        <ImageUploader/>
      </div>
        <div>
            <input  className="mr-2" type="checkbox" id="enableInputCheckbox" onChange={toggleInputArea} />
            <label htmlFor="enableInputCheckbox">This product has an SKU code</label>
            <br />
            <input
            type="text"
            id="inputArea"
            disabled={!inputEnabled}
            placeholder="Type here..."
            value={SKUCode}
            onChange={(e) => dispatch(setSKUCode(e.target.value))}
            />
        </div>
    <hr/>

    </div>
  )  
}

export default BasicDetails