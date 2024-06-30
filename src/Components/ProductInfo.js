import React from 'react';
import { useSelector } from 'react-redux';
import ImageDisplay from './ImageDisplay';

const ProductInfo = () => {
  const title = useSelector((state) => state.product.productCategory);
  const description = useSelector((state) => state.product.productDescription);
  const code = useSelector((state) => state.product.SKUCode);
  const listPrice = useSelector((state) => state.pricing.listPrice);
  const netPrice = useSelector((state) => state.pricing.netPrice);


  console.log(netPrice)

  return (
    <div className="mt-4 p-4 w-75 h-75 border border-dark justify-content-center" style={{ textAlign: 'center' }}>
      <ImageDisplay/>
      <h2 className='p-2'>{title}</h2>
      <div style = {{
          textAlign: 'left',
          fontWeight: 'bold',
          fontFamily: 'Arial', 
          }}
      >{code}</div>
      <div className="border border-danger p-2" style={{ textAlign: 'justify' }}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div>
        <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>${listPrice}</span>
        <span>${netPrice}</span>
      </div>
    </div>
  );
}

export default ProductInfo;
