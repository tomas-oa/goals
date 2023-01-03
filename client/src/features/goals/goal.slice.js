import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goal.service";

const initialState = {
  goals: [],
  error: false,
  success: false,
  loading: false,
  message: "",
};

export const createGoal = createAsyncThunk(
  "goals/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(data, token);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getGoals = createAsyncThunk(
  "goals/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.getGoals(token);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.message = action.payload;
        state.error = true;
        state.loading = false;
      })
      .addCase(getGoals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.message = action.payload;
        state.error = true;
        state.loading = false;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
