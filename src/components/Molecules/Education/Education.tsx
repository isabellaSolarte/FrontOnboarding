import { Box } from "@mui/material";
import CustomText from "../../Atoms/CustomText/CustomText";

const Education = () => {
    return(
        <Box sx={{borderBottom: '1px solid grey'}}>
            <CustomText
                texto="Información académica"
                variante="titulo"
            />
            <ul>
                <li>Estudiante de décimo semestre | Ingeniería de sistemas, Universidad del Cauca, Popayán</li>
                <li>Bachiller | Colegio Hogar Madre de Dios, Popayán, Cauca</li>
            </ul>
            
       </Box>
    );
}
export default Education;