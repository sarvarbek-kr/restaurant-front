import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";


/*  REDUX SLICE & SELECTOR   */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
  });
const productsRetriever = createSelector(retrieveProducts, (products) => ({ 
    products, 
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
  }  


export default function Products(props: ProductsProps) {
   const { onAdd } = props;
   const { setProducts } = actionDispatch(useDispatch());
   const { products } = useSelector(productsRetriever);
   const [ productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
   })
const [searchText, setSearchText] = useState<string>("");
const history = useHistory();

   useEffect(() => {
     const product = new ProductService();
     product
       .getProducts(productSearch)
       .then((data) => setProducts(data))
       .catch(err => console.log(err));
   }, [productSearch]);

   useEffect(() => {
     if(searchText === "") {
        productSearch.search = "";
        setProductSearch({...productSearch});
     }

   }, [searchText]);

    /**  HANDLER */
    const searchCollectionHandler = (collection: ProductCollection) => {
      productSearch.page = 1;
      productSearch.productCollection = collection;
      setProductSearch({...productSearch});
    };

    const searchOrderHandler = (order: string) => {
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });
    }

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    };

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({...productSearch});
    };

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    };

  return (
    <div className={"products"}>
      <Container>
        <Stack 
           flexDirection={'column'} 
           alignItems={'center'}>
            <Stack className={"avatar-big-box"} justifyContent={'space-between'}>
                    <p>The Gusto Restaurant</p>
                    <Stack flexDirection={'row'} position={'relative'} alignItems={'center'}>
                       <input 
                       type="search" 
                       placeholder="Type here"
                       value={searchText} 
                       onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                         if(e.key === "Enter") searchProductHandler();
                       }}
                       />
                       <Button 
                       className="search-btn" 
                       color="secondary"
                       onClick={searchProductHandler}
                      
                    >
                        SEARCH
                        <SearchIcon/>
                       </Button>
                    </Stack>
            </Stack>

            <Stack className={"dishes-filter-section"}>
                <Stack className={"dishes-filter-box"}>
                    <Button
                        variant={"contained"}
                        className={"order"}
                        color={ 
                            productSearch.order === "createdAt" ? "primary" : "secondary"
                        }
                        onClick={() => searchOrderHandler("createdAt")}>
                            New
                    </Button>
                    <Button
                        variant={"contained"}
                        className={"order"}
                        color={ 
                            productSearch.order === "productPrice" ? "primary" : "secondary"
                        }
                        onClick={() => searchOrderHandler("productPrice")}>
                            Price
                    </Button>
                    <Button
                        variant={"contained"}
                        className={"order"}
                        color={ 
                            productSearch.order === "productViews" ? "primary" : "secondary"
                        }
                        onClick={() => searchOrderHandler("productViews")}>
                            Views
                    </Button>
                </Stack>
            </Stack>

            <Stack className={"list-category-section"}>
                <Stack className={"product-category"}>
                    <div className={"category-main"}>
                        <Button 
                        variant={"contained"} 
                        color={productSearch.productCollection === ProductCollection.OTHER 
                            ? "primary" 
                            : "secondary"
                        } 
                        onClick={() => searchCollectionHandler(ProductCollection.OTHER)}>
                            Other
                        </Button>
                        <Button variant={"contained"} 
                           color={productSearch.productCollection === ProductCollection.DESSERT 
                            ? "primary" 
                            : "secondary"
                        } 
                        onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                            Dessert
                        </Button>
                        <Button variant={"contained"} 
                           color={productSearch.productCollection === ProductCollection.DRINK
                            ? "primary" 
                            : "secondary"
                        }
                        onClick={() => searchCollectionHandler(ProductCollection.DRINK)}>
                            Drink
                        </Button>
                        <Button variant={"contained"}    
                        color={productSearch.productCollection === ProductCollection.SALAD
                            ? "primary" 
                            : "secondary"
                        }
                        onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                            Salad
                        </Button>
                        <Button 
                        variant={"contained"} 
                        color={productSearch.productCollection === ProductCollection.DISH 
                            ? "primary" 
                            : "secondary"
                        }
                        onClick={() => searchCollectionHandler(ProductCollection.DISH)}>
                            Dish
                        </Button>
                    </div>
                </Stack>
                <Stack className={"product-wrapper"}>
                    {products.length !== 0 ? (
                        products.map((product: Product) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`;
                            const sizeVolume = 
                            product.productCollection === ProductCollection.DRINK 
                            ? product.productVolume + " litre "
                            : product.productSize + " size ";
                            return (
                            <Stack 
                            key={product._id} 
                            className={"product-card"} 
                            onClick={() => chooseDishHandler(product._id)}
                            >
                                <Stack
                                className={"product-img"}
                                sx={{ backgroundImage: `url(${imagePath})`}} >
                                <div className={"product-scale"}>{sizeVolume}</div>
                                <Button 
                                   className={"shop-btn"}
                                   onClick={(e:any) => {
                                    onAdd({
                                        _id: product._id,
                                        quantity: 1,
                                        name: product.productName,
                                        price: product.productPrice,
                                        image: product.productImages[0],
                                    });
                                    e.stopPropagation();
                                   }}
                                >
                                    <img 
                                    alt=""
                                    src={"/icons/shopping-cart.svg"}
                                    style={{ display: "flex "}}
                                    />
                                </Button>
                                <Button className={"view-btn"} sx={{ right: "36px"}}>
                                    <Badge 
                                    badgeContent={product.productViews} 
                                    color={"secondary"}
                                    >
                                        <RemoveRedEyeIcon
                                        sx={{
                                            color: product.productViews === 0 ? "white" : "gray",
                                        }}
                                        />
                                    </Badge>
                                </Button>
                                </Stack>
                                <Box className={"product-desc"}>
                                    <span className={"product-tittle"}>
                                        {product.productName}
                                    </span>
                                    <div className={"product-desc"}>
                                        <MonetizationOnIcon/>
                                        {product.productPrice}
                                    </div>
                                </Box>
                            </Stack>
                            );
                        })
                    ) : (
                        <Box className="no-data">Products are unavailable</Box>
                    )}
                </Stack>
            </Stack>

            <Stack className={"pagination-section"}>
                <Pagination
                count={products.length !== 0 
                    ? productSearch.page + 1
                    : productSearch.page              
                }
                page={productSearch.page}
                renderItem={(item) => (
                    <PaginationItem
                    components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                    />
                )}
                onChange={paginationHandler}
            />
            </Stack>

        </Stack>
      </Container>


      <div className={"brands-logo"}>
        {/* <Container className={"family-brands"}>
            <Box className={"category-title"}>Meet our Chef</Box>
            <Stack
          className={"events-info swiper-wrapper"}
          spaceBetween={30}
        >
              <Stack className={"events-info-frame"}>
                <div className={"events-img"}>
                  <img src={value.img} className={"events-img"} />
                </div>
                <Box className={"events-desc"}>
                  <Box className={"events-bott"}>
                    <Box className={"bott-left"}>
                      <div className={"event-title-speaker"}>
                        <strong>{value.title}</strong>
                        <div className={"event-organizator"}>
                          <img src={"/icons/id-badge-regular.svg"} />
                          <p className={"spec-text-author"}>{value.author}</p>
                        </div>
                      </div>

                      <p className={"text-desc"}> {value.desc} </p>

                      <div className={"bott-info"}>
                        <div className={"bott-info-main"}>
                          <img src={"/icons/calendar.svg"} />
                          {value.date}
                        </div>
                        <div className={"bott-info-main"}>
                          <img src={"/icons/location.svg"} />
                          {value.location}
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Stack>
        </Stack>
        </Container> */}
      </div>
      <div className={"address"}>
        <Container>
            <Stack className={"address-area"}>
                <Box className={"title"}> Our address </Box>
                <iframe
                style={{ marginTop: "60px" }}
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95937.90573034334!2d69.12329367702726!3d41.28580832212753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38ae8a31ca66d417%3A0x5755ff29b7bf33a!2s76P4%2B87P%2C%20100097%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.285837699999995!2d69.20569449999999!5e0!3m2!1sen!2skr!4v1728887853286!5m2!1sen!2skr"
                width="1320"
                height="500"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Stack>
        </Container>
      </div>
    </div>
)}