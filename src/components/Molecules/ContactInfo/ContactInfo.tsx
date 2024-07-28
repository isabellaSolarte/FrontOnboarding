import { Box } from "@mui/material";
import CustomText from "../../Atoms/CustomText/CustomText";

const ContactInfo = () => {
    return (
       <Box sx={{borderBottom: '1px solid lightgrey'}}>
            <CustomText
                texto="Datos personales"
                variante="titulo"
            />
            <Box height={10}/>
            <CustomText
                texto="Objetivo laboral"
                variante="subtitulo"
            />
            <CustomText
                texto=" Mi objetivo laboral se basa en adquirir mi primer empleo, para crecer profesional y personalmente. Mi meta es trabajar y
                aprender junto a un equipo de desarrollo, en donde pueda desplegar todos mis conocimientos adquiridos a lo largo de la carrera."
                variante="texto"
            />
            <Box height={10}/>
             <CustomText
                texto="Competencias"
                variante="subtitulo"
            />
            <ul>
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>Dart</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Go</li>
                <li>PL/SQL</li>
            </ul>
            <Box height={10}/>

            <CustomText
                texto="Habilidades"
                variante="subtitulo"
            />
            <ul>
                <li>Trabajo en equipo</li>
                <li>Liderar grupos de trabajo</li>
                <li>Tener una comunicación clara y respetuosa con mis compañeros de trabajo</li>
                <li>Resolución de problemas </li>
                <li>Trabajo bajo presión</li>
                <li>Adaptabilidad y flexibilidad</li>
            </ul>
       </Box>
    );
       
}
export default ContactInfo;