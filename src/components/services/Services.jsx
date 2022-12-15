import React from 'react'
import "./services.css"
import Languages from "../../assets/languages.svg"
import Interests from "../../assets/interests.svg"
import Tools from "../../assets/tools.svg"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
});


// const data = [
//   {
//     id: 1,
//     image: Image1,
//     title: "Full Stack Software Development",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
//   {
//     id: 2,
//     image: Image2,
//     title: "Web Development",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
//   {
//     id: 3,
//     image: Image3,
//     title: "Photography",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
// ];

const Services = () => {
  return (
    <section className="services container section" id="service">
      <h2 className="section__title">Technical Skills</h2>
      
      <div className="services__container grid">
        <div className="services__card" key="1">
          <img src={Languages} alt="" className="services__img" />
          <h4 className="services__title"> Languages And Frameworks </h4>
          <ThemeProvider theme={theme}>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Python" color="primary" />
              <Chip icon={<FaceIcon />} label="C++" color="primary" />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Java" color="primary" />
              <Chip icon={<FaceIcon />} label="Ruby On Rails" color="primary" />
            </Stack>
              <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="React" color="primary" />
              </Stack>
          </Stack>
          </ThemeProvider>
        </div>

        <div className="services__card" key="2">
          <img src={Interests} alt="" className="services__img" />
          <h4 className="services__title">Areas Of Interest</h4>
          <ThemeProvider theme={theme}>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Full-Stack Dev" color="primary" />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="AI/ML" color="primary" />
              <Chip icon={<FaceIcon />} label="Web Dev" color="primary" />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Game Dev" color="primary" />
              <Chip icon={<FaceIcon />} label="Core Systems" color="primary" />
            </Stack>
            
          </Stack>
          </ThemeProvider>
        </div>

        <div className="services__card" key="3">
          <img src={Tools} alt="" className="services__img" />
          <h4 className="services__title">DevOps and Tools</h4>
          <ThemeProvider theme={theme}>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Docker" color="primary" />
              <Chip icon={<FaceIcon />} label="Git" color="primary" />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip icon={<FaceIcon />} label="Perforce" color="primary" />
              <Chip icon={<FaceIcon />} label="Unity" color="primary" />
            </Stack>
              <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="CI/CD Pipelines" color="primary" />
              </Stack>
          </Stack>
          </ThemeProvider>
        </div>


        {/* {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })} */}

        
      </div>
    </section>

  );
};

export default Services