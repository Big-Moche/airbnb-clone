import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Experiences from JSON Server running on port 4001
export const fetchExperiences = createAsyncThunk(
  "experiences/fetchExperiences",
  async () => {
    const response = await axios.get("http://localhost:4001/experiences");
    return response.data;
  }
);

const experienceSlice = createSlice({
  name: "experiences",
  initialState: {
    experiences: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.experiences = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default experienceSlice.reducer;
