import { Box } from "@mui/material";
import ContactInfo from "../../Molecules/ContactInfo/ContactInfo";
import Education from "../../Molecules/Education/Education";
import WorkExperience from "../../Molecules/WorkExperience/WorkExperience";

const Content = () => {
  return (
    <Box id="info-general" alignItems="center" gap={2} sx={{ margin: '40px', padding: '30px' }}>
      <ContactInfo />
      <Box height={15}/>
      <Education />
      <Box height={15}/>
      <WorkExperience />
    
      <div id="references">
        <h2>Referencias</h2>
        <ul>
          <li><strong>Sebastian Beleño | Desarrollador</strong>
            <br />Teléfono: 3117585689
            <br />Email: sebasbeno15@gmail.com
          </li>
        </ul>

      </div>
    </Box>
  );
};

export default Content;
