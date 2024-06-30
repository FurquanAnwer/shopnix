import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../Slice/imageSlice'; 

const ImageUploader = () => {
  const dispatch = useDispatch();
  const [image, setImageState] = useState(null);
  const [preview, setPreviewState] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageState(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewState(reader.result);
        dispatch(setImage({ image: file, preview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  
  return (
    <div className='p-2'>
      <h5>Add Image</h5>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <img src={preview} alt="Preview" style={{ marginTop: '10px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
