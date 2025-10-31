// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Fetch Experiences from JSON Server running on port 4001
// export const fetchExperiences2 = createAsyncThunk(
//   "experiences2/fetchExperiences2",
//   async () => {
//     const response1 = await axios.get("http://localhost:4001/experiences2");
//     return response1.data;
//   }
// );

// const experienceSlice2 = createSlice({
//   name: "experiences2",
//   initialState: {
//     experiences: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchExperiences2.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchExperiences2.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.experiences = action.payload;
//       })
//       .addCase(fetchExperiences2.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default experienceSlice2.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExperiences2 = createAsyncThunk(
  "experiences/fetchExperiences2",
  async () => {
    const response1 = await axios.get("http://localhost:4001/experiences2");

    return response1.data;
  }
);

const experienceSlice2 = createSlice({
  name: "experiences2",
  initialState: { experiences2: [], status1: "idle", erro1: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences2.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExperiences2.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.experiences2 = action.payload;
      })
      .addCase(fetchExperiences2.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default experienceSlice2.reducer;
