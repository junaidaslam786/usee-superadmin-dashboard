import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      // state.user = state.user = action.payload;
      state.user = { ...state.user, ...action.payload };
    },

    updateUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfileImage: (state, action) => {
      state.user.profileImage = action.payload;
    },
  },
});

// export const originalReducer = userSlice.reducer;

// userSlice.reducer = (state, action) => {
//   console.log("Received action:", action);
//   console.log("State before processing:", state);
//   const newState = originalReducer(state, action);
//   console.log("State after processing:", newState);
//   return newState;
// };

export default userSlice.reducer;

export const { logout, setUser, updateUserProfile, updateProfileImage } =
  userSlice.actions;
