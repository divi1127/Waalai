import React from 'react';
import textLogoColoredUrl from '../assets/waalai_text.png';

const WaalaiText = ({ style = {}, className = "", scale = 1.4 }) => {
  return (
    <img 
      src={textLogoColoredUrl} 
      alt="Waalai" 
      className={className}
      style={{ 
        height: `${1.2 * scale}em`, 
        verticalAlign: 'middle',
        objectFit: 'contain',
        ...style 
      }} 
    />
  );
};

export default WaalaiText;
