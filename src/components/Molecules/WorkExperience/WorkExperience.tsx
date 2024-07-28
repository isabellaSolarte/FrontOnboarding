import { Box } from "@mui/material";
import CustomText from "../../Atoms/CustomText/CustomText";

const WorkExperience = () => {
    return (
        <Box sx={{borderBottom: '1px solid grey'}}>
            <CustomText
                texto="Experiencia "
                variante="titulo"
            />
            <Box height={10}/>
            <CustomText
                texto="Tecnologías"
                variante="subtitulo"
            />
            <ul>
                <li>Visual Studio Community 2019</li>
                <li>Flutter</li>
                <li>Oracle Manage Data Access</li>
                <li>Git | GitHub</li>
                <li>Apache NetBeans</li>
                <li>Distribución de Linux | Debian 11</li>
                <li>Visual Studio Code</li>
                <li>Vim text editor</li>
            </ul>
       </Box>
    );
}
export default WorkExperience;