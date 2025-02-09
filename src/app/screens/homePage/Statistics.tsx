import React from "react";
import { Box, Container, Stack } from "@mui/material"
export default function Statistics() {
    return (
    <div className={"static-frame"}>
       <Container>
          <Stack className="info">
          <Stack className="static-block">
            
              <Stack className="static-color">
                <img src="icons/locate.svg"/>
              </Stack>
              <Stack className="static-box">
                <Box className="static-num">Locate Us</Box>
                <Box className="static-text">Riverside 25, Daejeon, Korea</Box>
              </Stack>
            </Stack>
            
            <Stack className="static-block">
              <Stack className="static-color">
                <img src="icons/open.svg"/>
              </Stack>
              <Stack className="static-box">
                <Box className="static-num">Open Hours</Box>
                <Box className="static-text">Mon To Fri 9:00 AM - 9:00 PM</Box>
              </Stack>
            </Stack>
           
            <Stack className="static-block">
              <Stack className="static-color">
                <img src="icons/Reserve.svg"/>
              </Stack>
              <Stack className="static-box">
                <Box className="static-num">Reservation</Box>
                <Box className="static-text">hirestaurantat@gmail.com</Box>
              </Stack>
            </Stack>
            
          </Stack>
        </Container>        
    </div>);
};
