import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import CustomIcon from "../../Atoms/CustomIcon/CustomIcon";

const Footer = () => {
    return(
        <Box className="footer" display="flex" alignItems="center" gap={2}
            sx={{borderRadius: '10px'}}>
            <CustomIcon href="https://github.com/isabellaSolarte" color="#ffffff" Icon={GitHubIcon} />
            <Box width={10}/>
            <CustomIcon href="mailto:isabsolarte@unicauca.edu.co" color="#ffffff" Icon={EmailIcon}  />
            <Box width={10}/>
            <CustomIcon href="https://www.linkedin.com/in/isabella-solarte-sandoval-4b5b96298" color="#ffffff" Icon={LinkedInIcon} />
        </Box>

    );
}
export default Footer;