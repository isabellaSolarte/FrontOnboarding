import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface CustomIconProps {
  href: string;
  Icon: React.ComponentType<SvgIconProps>;
  color?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ href, Icon, color }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <Icon style={{ color: color, width: '40px',height:'60px' }} />
    </a>
  );
};

export default CustomIcon;