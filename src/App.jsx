import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import "./App.css";
import sushmithaPicture from "./assets/sushmitha-profile-cropped.jpg";
import { Box, Button, Container, IconButton } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: {
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "24px",
      "@media (min-width:600px)": {
        fontSize: "32px",
      },
    },
    subtitle1: {
      color: "#F3BF99",
      fontWeight: 351,
      fontSize: "12.8px",
      "@media (min-width:600px)": {
        fontSize: "15px",
      },
    },
    caption: {
      color: "#F5F5F5",
      fontSize: "12px",
      "@media (min-width:600px)": {
        fontSize: "13px",
      },
    },
    h6: {
      color: "#F5F5F5",
      fontWeight: 650,
      fontSize: "16px",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
    },
    body1: {
      color: "#DCDCDC",
      fontSize: "12px",
      fontWeight: 400,
      "@media (min-width:600px)": {
        fontSize: "14px",
      },
    },
  },
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: "footer-icon" },
          style: {
            backgroundColor: "#918E9B",
            color: "black",
            borderRadius: "10%",
            padding: "2px",
            margin: "0 13px",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontFamily: "Inter, sans-serif",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          padding: "6px 29px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            background: "#1A1B21",
            borderRadius: "10px",
            width: { xs: "100%", sm: "400px" },
            marginY: "6px",
          }}
        >
          <CardMedia
            component="img"
            alt="profilePicture"
            src={sushmithaPicture}
            sx={{
              height: { xs: "280px", sm: "280px" },
              objectPosition: "0% 26%",
              scale: "1.1",
            }}
          />
          <CardContent sx={{ marginTop: "5px", marginBottom: "5px" }}>
            <Typography className="name" variant="h4" component="div">
              Sushmita D T
            </Typography>
            <Typography
              className="role"
              variant="subtitle1"
              component="div"
              sx={{ marginTop: "-2px", marginBottom: "5px" }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              className="website"
              variant="caption"
              component="div"
              gutterBottom
            >
              <a
                id="website"
                href="https://sushmitaportfolio.com"
                target="_blank"
              >
                sushmitaPortfolio.com
              </a>{" "}
              <OpenInNewIcon sx={{ fontSize: "10px" }} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingX: "36px",
                marginTop: "20px",
                marginBottom: "25px",
              }}
            >
              <Button
                variant="contained"
                href="mailto:dtsushmitha@gmail.com"
                target="_blank"
                sx={{
                  background: "#D1D5DB",
                  color: "#374151",
                }}
              >
                <EmailIcon sx={{ marginRight: "8px", width: "16px" }} />
                Email
              </Button>
              <Button
                variant="contained"
                href="https://www.linkedin.com/in/sushmitha-dt/"
                target="_blank"
                sx={{
                  background: "#5093E2",
                  "&:hover": {
                    color: "#374151",
                  },
                }}
              >
                <LinkedInIcon sx={{ marginRight: "8px", width: "18px" }} />
                LinkedIn
              </Button>
            </Box>
            <Box sx={{ paddingX: "36px" }}>
              <Typography className="subHeading" variant="h6">
                About
              </Typography>
              <Typography className="body-text" variant="body1" gutterBottom>
                I am a Full Stack Developer with a passion for learning new
                technologies. I have experience working with JavaScript, React,
                Node.js, Express, MongoDB, and more.
              </Typography>
              <Typography
                className="subHeading"
                variant="h6"
                sx={{ marginTop: { xs: "15px", sm: "20px" } }}
              >
                Interests
              </Typography>
              <Typography className="body-text" variant="body1">
                Personal projects. Hackathons. Blogging. Travel geek. Anime
                buff. Tea Fanatic.
              </Typography>
              <Typography
                className="body-text"
                variant="body1"
                sx={{
                  paddingTop: "15px",
                  color: "pink",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                I am currently open to new opportunities! Here's my{" "}
                <a
                  href="https://drive.google.com/file/d/12kXRsPBNpDcTp7VkygxT5oJw-9V_KIux/view"
                  target="_blank"
                >
                  resume
                </a>{" "}
                <OpenInNewIcon sx={{ fontSize: "10px" }} />
              </Typography>
            </Box>
          </CardContent>
          <Box
            className="footer"
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#161619",
              py: "20px",
            }}
          >
            <IconButton
              variant="footer-icon"
              href="https://github.com/Sushmitha-93"
              target="_blank"
              sx={{}}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              variant="footer-icon"
              href="https://www.linkedin.com/in/sushmitha-dt/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              variant="footer-icon"
              href="https://drive.google.com/file/d/12kXRsPBNpDcTp7VkygxT5oJw-9V_KIux/view"
              target="_blank"
            >
              <ContactPageIcon />
            </IconButton>
            <IconButton
              variant="footer-icon"
              href="https://sushmitaportfolio.com"
              target="_blank"
            >
              <LanguageIcon />
            </IconButton>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
