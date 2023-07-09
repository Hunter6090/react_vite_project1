import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import './MainPage.css';

function MainPage() {
    const theme = useContext(ThemeContext);
  
    const containerStyles = {
        backgroundColor: theme.mode === 'light' ? '#f1f1f1' : '#333',
        color: theme.mode === 'light' ? '#333' : '#f1f1f1',
        // ...
    };
  
    return (
      <div className="main-page-body" style={containerStyles}>
        <ThemeToggle></ThemeToggle>
        <h2>Main Page</h2>
      </div>
    );
  }

export default MainPage;
