import React, { useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FocusContext } from '../Contexts.js/FocusContext';


const Flowchart = () => {
//   const [focusedField, setFocusedField] = useState('');
  const { focusedField } = useContext(FocusContext);


//   const handleFocus = (field) => {
//     setFocusedField(field);
//   };

//   const handleBlur = () => {
//     setFocusedField('');
//   };

  const boxStyles = (field) => ({
    transition: 'all 0.3s ease-in-out',
    transform: focusedField === field ? 'scale(1.1)' : 'scale(1)',
    backgroundColor: focusedField === field ? '#40e0d0' : '#AFEEEE',
    borderRadius: '10px',
    padding: '15px',
    margin: '15px 0',
    color: '#fff',
    cursor: 'pointer',
  });

  const arrowStyles = {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #40e0d0',
    margin: '10px 0',
  };

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <div
        style={boxStyles('productType')}
        className="text-center"
      >
        <h5>Product Type</h5>
      </div>
      <div style={arrowStyles}></div>
      <div
        style={boxStyles('category')}
        className="text-center"
      >
        <h5>Category</h5>
      </div>
      <div style={arrowStyles}></div>
      <div
        style={boxStyles('subCategory')}
        className="text-center"
      >
        <h5>Sub-Category</h5>
      </div>
      <div style={arrowStyles}></div>
      <div
        style={boxStyles('product')}
        className="text-center"
      >
        <h5>Product</h5>
      </div>
    </div>
  );
};

export default Flowchart;



















//////////////////////
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Flowchart = () => {
//   const [focusedField, setFocusedField] = useState('');

//   const handleFocus = (field) => {
//     setFocusedField(field);
//   };

//   const handleBlur = () => {
//     setFocusedField('');
//   };

//   const boxStyles = (field) => ({
//     transition: 'all 0.3s ease-in-out',
//     transform: focusedField === field ? 'scale(1.1)' : 'scale(1)',
//     backgroundColor: focusedField === field ? '#40e0d0' : '#AFEEEE',
//     borderRadius: '10px',
//     padding: '15px',
//     margin: '15px 0',
//     color: '#fff',
//     cursor: 'pointer',
//   });

//   return (
//     <div className="container mt-3 d-flex flex-column align-items-center">
//       <div
//         style={boxStyles('productType')}
//         onFocus={() => handleFocus('productType')}
//         onBlur={handleBlur}
//         onMouseEnter={() => handleFocus('productType')}
//         onMouseLeave={handleBlur}
//         tabIndex="0"
//         className="text-center">
//         <h5>Product Type</h5>
//       </div>
//       <div
//         style={boxStyles('category')}
//         onFocus={() => handleFocus('category')}
//         onBlur={handleBlur}
//         onMouseEnter={() => handleFocus('category')}
//         onMouseLeave={handleBlur}
//         tabIndex="0"
//         className="text-center">
//         <h5>Category</h5>
//       </div>
//       <div
//         style={boxStyles('subCategory')}
//         onFocus={() => handleFocus('subCategory')}
//         onBlur={handleBlur}
//         onMouseEnter={() => handleFocus('subCategory')}
//         onMouseLeave={handleBlur}
//         tabIndex="0"
//         className="text-center">
//         <h5>Sub-Category</h5>
//       </div>
//       <div
//         style={boxStyles('product')}
//         onFocus={() => handleFocus('product')}
//         onBlur={handleBlur}
//         onMouseEnter={() => handleFocus('product')}
//         onMouseLeave={handleBlur}
//         tabIndex="0"
//         className="text-center">
//         <h5>Product</h5>
//       </div>
//     </div>
//   );
// };

// export default Flowchart;
