import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTheme } from '../Slice/themeSlice';
import ThemeCard from '../Components/ThemeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toaster,toast} from "react-hot-toast";
import BackgroundWrapper from '../Components/BackgroundWrapper';



const Theme = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const navigate = useNavigate();
  const [appliedTheme, setAppliedTheme] = useState(null);

  const themes = [
    { id: 1, title: 'Bags theme', image: 'https://shorturl.at/gEyCO' },
    { id: 2, title: 'Flex theme', image: 'https://shorturl.at/L9IH8' },
    { id: 3, title: 'Chic theme', image: 'https://shorturl.at/zmbgM' }
  ];

  
  const handleApply = (theme) => {
    dispatch(setTheme(theme));
    setAppliedTheme(theme);
    // callToasterforTheme();
  };

  const notify = () => {
    toast.error('Please select a theme before proceeding.', {
      duration: 1000,
      position: 'top-center',
      style: {
        background: '#333',
        color: '#fff',
      },
      icon: '❌',
    }
  )};

  const handleNext = () => {
    if (selectedTheme) {
      navigate('/ProductDetails');
    } else {
      // alert('Please select a theme before proceeding.');
      notify();
    }
  };

  return (
    <BackgroundWrapper>

    <div className="container mt-5">
    <div className="row p-3">
        {themes.map((theme) => (
          <ThemeCard 
            key={theme.id}
            title={theme.title}
            image={theme.image}
            onApply={() => handleApply(theme.title)}
            isApplied={appliedTheme === theme.title}
          />
        ))}
      </div>

      <div className="container mt-5 d-flex justify-content-center">
            <button 
              className="btn mt-3 btn btn-primary btn-lg" 
              onClick={handleNext} 
            >Next
            </button>
      </div>
      
      <Toaster 
        toastOptions={{
          duration: 3000,
          position: 'top-right',
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            icon: '✔️',
          },
          error: {
            duration: 4000,
            icon: '❌',
          },
        }}
      />
    </div>
    </BackgroundWrapper>
  );
};

export default Theme;
