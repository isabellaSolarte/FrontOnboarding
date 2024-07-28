import { Box } from '@mui/material';
import CustomText from '../../Atoms/CustomText/CustomText';
import ProfileImage from '../../Atoms/ProfileImage/ProfileImage';
import './Header.css';

const Header = () => {
  return (
    <Box id="header" display="flex" alignItems="center" gap={2}
      sx={{borderRadius: '10px'}}>
      <ProfileImage 
        src="public/Image.jpeg" 
        alt="foto perfil" 
      />
      <Box className="titulo">
        <CustomText 
          texto="Isabella "
          variante="titulo"
          color = "darkorange"
        /> 
        <CustomText 
          texto="Solarte Sandoval"
          color='white'
          variante="titulo"
        />
        <CustomText 
          texto="Ingeniera en formación"
          color='white'
          variante="subtitulo"
        />
      </Box>
    </Box>
  );
};

export default Header;