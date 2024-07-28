import React from 'react';
import { Box } from '@mui/material';

interface ProfileImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, width = 200, height = 200 }) => {
  return (
    <Box component="figure" 
        className="image"
        sx={{ border: '5px solid white', borderRadius: '50%', overflow: 'hidden' }}
    >
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        id="image"
      />
    </Box>
  );
};

export default ProfileImage;