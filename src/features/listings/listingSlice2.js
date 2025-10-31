import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListings2 = createAsyncThunk(
  "listings/fetchListings2",
  async () => {
    const response1 = await axios.get("http://localhost:4000/listings2");

    return response1.data;
  }
);

const listingSlice2 = createSlice({
  name: "listings2",
  initialState: { listings2: [], status1: "idle", erro1: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings2.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListings2.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listings2 = action.payload;
      })
      .addCase(fetchListings2.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default listingSlice2.reducer;
