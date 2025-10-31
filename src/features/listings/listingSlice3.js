import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListings3 = createAsyncThunk(
  "listings/fetchListings3",
  async () => {
    const response2 = await axios.get("http://localhost:4000/listings3");

    return response2.data;
  }
);

const listingSlice3 = createSlice({
  name: "listings3",
  initialState: { listings3: [], status2: "idle", error2: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings3.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListings3.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listings3 = action.payload;
      })
      .addCase(fetchListings3.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default listingSlice3.reducer;
