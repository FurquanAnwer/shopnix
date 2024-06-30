import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../Slice/imageSlice'; // Import the setImage action

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
        // Dispatch the image and preview to the Redux store
        dispatch(setImage({ image: file, preview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      // Handle the image upload logic here, e.g., send to a server
      console.log("Image ready to be uploaded:", image);
    } else {
      console.log("No image selected");
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
      {/* <button className="btn btn-primary mt-3" onClick={handleUpload}>Upload Image</button> */}
    </div>
  );
};

export default ImageUploader;
