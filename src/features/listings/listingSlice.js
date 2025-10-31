import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListings = createAsyncThunk(
  "listings/fetchListings",
  async () => {
    const response = await axios.get("http://localhost:4000/listings");

    return response.data;
  }
);

const listingSlice = createSlice({
  name: "listings",
  initialState: { listings: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default listingSlice.reducer;
