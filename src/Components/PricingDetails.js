import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
  setNetPrice, 
  setListPrice, 
  setDiscount, 
  setGstRate, 
  setShippingCharges, 
  setStockLevel 
} from '../Slice/pricingSlice';

const PricingDetails = () => {
    const dispatch = useDispatch();
    const { listPrice, discount, gstRate, shippingCharges, netPrice, stockLevel } = useSelector(state => state.pricing);
    const [inputEnabled, setInputEnabled] = useState(false);
    
    const toggleInputArea = () => {
      setInputEnabled(!inputEnabled);
    };

    const calculateNetPrice = () => {
      const net = (listPrice * ((100 - discount) / 100) * ((100 + gstRate) / 100)) + parseFloat(shippingCharges);
      const netPriceRounded = parseFloat(net.toFixed(2));
      dispatch(setNetPrice(netPriceRounded));
    };
  
    useEffect(() => {
      calculateNetPrice();
      console.log("I am being called.");
    }, [listPrice, discount, gstRate, shippingCharges]);  

    console.log(netPrice);
  return (
    <>
    <h2>Pricing Details</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label><b>Net Price</b></label>
            <input
              type="text"
              className="form-control"
              value={netPrice}
              onChange={(e) => dispatch(setNetPrice(parseFloat(e.target.value) || 0))}
            
            //   readOnly
            />
          </div>
          <div className="form-group">
            <label><b>List Price</b></label>
            <input
              type="text"
              className="form-control"
              value={listPrice}
              onChange={(e) => dispatch(setListPrice(parseFloat(e.target.value) || 0))}
            />
          </div>
          <div className="form-group">
            <label><b>Discount Percentage</b></label>
            <input
              type="text"
              className="form-control"
              value={discount}
              onChange={(e) => dispatch(setDiscount(parseFloat(e.target.value) || 0))}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
          <input  className="mr-2" type="checkbox" id="enableInputCheckbox" onChange={toggleInputArea} />
            <label><b>GST Rate</b></label>
            <input
              type="text"
              className="form-control"
              disabled={!inputEnabled}
              value={gstRate}
              onChange={(e) => dispatch(setGstRate(parseFloat(e.target.value) || 0))}
            />
          </div>
          <div className="form-group">
            <label><b>Shipping Charges (if any)</b></label>
            <input
              type="text"
              className="form-control"
              value={shippingCharges}
              onChange={(e) => dispatch(setShippingCharges(parseFloat(e.target.value) || 0))}
            />
          </div>
          <div className="form-group">
            <label><b>Stock Level</b></label>
            <input
              type="text"
              className="form-control"
              value={stockLevel}
              onChange={(e) => dispatch(setStockLevel(parseFloat(e.target.value) || 0))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingDetails;






    