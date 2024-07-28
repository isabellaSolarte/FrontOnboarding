import { Box } from "@mui/material";
import CustomText from "../../Atoms/CustomText/CustomText";

const References = () => {
    return (
        <Box >
            <CustomText
                texto="Referencias"
                variante="titulo"
            />
            <Box height={5}/>
            <ul>
                <li><strong>Sebastian Beleño | Desarrollador</strong>
                    <br />Teléfono: 3117585689
                    <br />Email: sebasbeno15@gmail.com
                </li>
        </ul>
            
       </Box>
    );
}
export default References;