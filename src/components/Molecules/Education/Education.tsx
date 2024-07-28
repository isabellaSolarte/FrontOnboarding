import { Box } from "@mui/material";
import CustomText from "../../Atoms/CustomText/CustomText";

const Education = () => {
    return(
        <Box sx={{borderBottom: '1px solid lightgrey'}}>
            <CustomText
                texto="Información académica"
                variante="titulo"
            />
            <Box height={10}/>
            
            <ul>
                <li>Estudiante de décimo semestre | Ingeniería de sistemas, Universidad del Cauca, Popayán</li>
                <li>Bachiller | Colegio Hogar Madre de Dios, Popayán, Cauca</li>
            </ul>
            
       </Box>
    );
}
export default Education;