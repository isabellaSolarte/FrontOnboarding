import { Box } from "@mui/material";
import ContactInfo from "../../Molecules/ContactInfo/ContactInfo";
import Education from "../../Molecules/Education/Education";
import WorkExperience from "../../Molecules/WorkExperience/WorkExperience";
import References from "../../Molecules/References/References";

const Content = () => {
  return (
    <Box id="info-general" alignItems="center"  sx={{ margin: '40px', padding: '30px', backgroundColor: '#CFCAC4',borderRadius: '10px'}}>
      <ContactInfo />
      <Box height={15}/>
      <Education />
      <Box height={15}/>
      <WorkExperience />
      <Box height={15}/>
      <References />

    </Box>
  );
};

export default Content;
