import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        crossorigin='anonymous'
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/AD_image.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Alx_Africa</Typography>
        <Typography color={medium}><a href="https://www.alxafrica.com/nigeria/">alx_africa.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">   
        ALX_Africa is a leading organization dedicated to building a career pathway in tech for African youth. Through immersive training programs, mentorship, and access to a global network, ALX_Africa equips individuals with the skills and opportunities needed to thrive in the tech industry.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
