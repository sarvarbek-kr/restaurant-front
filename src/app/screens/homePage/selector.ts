import { createSelector } from "@reduxjs/toolkit";
import { AppRootState, HomePageState } from "../../../lib/types/screen";


const selectHomePage = ( state: AppRootState ) => state.homePage;

export const retrievePopularDishes = createSelector(
    selectHomePage,
    (HomePage: HomePageState) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage: HomePageState) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage: HomePageState) => HomePage.topUsers
);