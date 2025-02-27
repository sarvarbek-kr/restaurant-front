import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/enums/product.enum";
import "../../../css/home.css";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

/*  REDUX SLICE & SELECTOR   */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
});

export default function HomePage() {
   const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch());

  useEffect(() => { 
    const product = new ProductService();
    const member = new MemberService();

    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    })
    .then((data) => {
      setPopularDishes(data);
    })
    .catch((err) => console.log(err));

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
    })
    .then((data) => setNewDishes(data))
    .catch((err) => console.log(err));

    member
    .getTopUsers()
    .then((data) => setTopUsers(data))
    .catch((err) => console.log(err));


  }, []);


  return (
    <div className={"homepage"}> 
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>
  );
  }  