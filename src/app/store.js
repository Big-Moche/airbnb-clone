import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "../features/listings/listingSlice";
import listingReducer2 from "../features/listings/listingSlice2";
import listingReducer3 from "../features/listings/listingSlice3";
import experienceReducer from "../features/experiences/experienceSlice";
import experienceReducer2 from "../features/experiences/experienceSlice2";

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    listings2: listingReducer2,
    listings3: listingReducer3,
    experiences: experienceReducer,
    experiences2: experienceReducer2,
  },
});
