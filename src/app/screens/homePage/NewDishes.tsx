import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from "@mui/icons-material/Visibility"
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/enums/product.enum";


/*  REDUX SLICE & SELECTOR   */
const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
    newDishes, })
);

export default function NewDishes() {
    const { newDishes } = useSelector(newDishesRetriever);
    const history = useHistory();

  console.log("newDishes:", newDishes);

  const chooseProductHandler = (id:string) => {
    history.push(`/products/${id}`)
  }

    return (
    <div className={"new-products-frame"}>
       <Container>
        <Stack className={"main"}>
            <Box className={"category-title"}>Post-Meal Delights</Box>
            <Stack className={"cards-frame"}>
                <CssVarsProvider>
                  {newDishes.length !== 0 ? (
                    newDishes.map((product: Product) => {
                        const imagePath = `${serverApi}/${product.productImages[0]}`;
                        const sizeVolume = product.productCollection === ProductCollection.DRINK
                        ? product.productVolume + "l" 
                        : product.productSize + " size ";
                        return (
                            <Card key={product._id} variant="outlined" className={"card"} onClick={()=> chooseProductHandler(product._id)}>
                                <CardOverflow>
                                    <div className="product-sale">{sizeVolume}</div>
                                    <AspectRatio ratio="1">
                                        <img src={imagePath} alt=""/>
                                    </AspectRatio>
                                </CardOverflow>

                                <CardOverflow variant="soft" className="product-detail">
                                    <Stack className="info">
                                        <Stack flexDirection={"row"}>
                                            <Typography className={"title"}>
                                                {product.productName}
                                            </Typography>
                                            <Divider width="2" height="24" bg="#d9d9d9" />
                                            <Typography className={"price"}>
                                                ${product.productPrice}
                                            </Typography>
                                        </Stack>
                                        <Stack>
                                            <Typography className={"views"}>
                                                {product.productViews}
                                                <VisibilityIcon
                                                sx={{ fontSize: 20, marginLeft: "5px" }}
                                                />
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardOverflow>
                            </Card>
                        );
                    })
                    ) : (
                        <Box className="no-data">Seasonal Menu is unavailable!</Box>
                    )}
                </CssVarsProvider>
            </Stack>
        </Stack>
         </Container>        
    </div>);
}