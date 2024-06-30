import React from 'react';
import { useSelector } from 'react-redux';

const ImageDisplay = () => {
  const { preview } = useSelector(state => state.image); 

  return (
    <div>
      {preview ? (
        <img src={preview} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  );
};

export default ImageDisplay;
