import React, { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from "@mui/icons-material/Visibility"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";


/*  REDUX SLICE & SELECTOR   */
const popularDishesRetriever = createSelector(
retrievePopularDishes,
(popularDishes) => ({ popularDishes })
);


export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriever);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chooseProductHandler = (id:string) => {
    history.push(`/products/${id}`)
  }
    return (
    <div className="popular-dishes-frame">
       <Container>
         <Stack className="popular-section">
            <Box className="category-title">Menu of the day</Box>
            <Stack className="cards-frame">
              {popularDishes.length !== 0 ? (
              popularDishes.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card className={"card"} onClick={()=> chooseProductHandler(product._id)}>
                      <CardCover>
                        <img src={imagePath} alt=""/>
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack 
                          flexDirection={"row"}
                          justifyContent={"space-between"}>
                            <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}>
                              {product.productName}
                            </Typography>
                            <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                            >
                              {product.productViews}
                              <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                      </CardContent>
                      <CardOverflow 
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        height: "80px",
                      }}
                      >
                        <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="neutral.300"
                        >
                          {product.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
              ) : (
                  <Box className="no-data">Today's menu of the day is unavailable!</Box>
              )}
            </Stack>
         </Stack>
       </Container>        
    </div>);
}