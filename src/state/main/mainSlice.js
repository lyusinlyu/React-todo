import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initSiteDetails } from 'api/auth';
import Auth from 'helpers/Auth';


// First, create the thunk
const initSite = createAsyncThunk(
  'main/initSite',
  async () => {
    if(!Auth.isTokenExists()) {
      return Promise.resolve(null);
    }
    const response = await initSiteDetails();
    return response.data.user;
  }
);

const initialState = {
  isSiteInited: false,
  authUser: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mainUser = action.payload;
    },
    setSiteInited: (state, action) => {
      state.isSiteInited = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(initSite.fulfilled, (state, action) => {
      // Add user to the state array
      state.authUser = action.payload;
      state.isSiteInited = true;
    });
    builder.addCase(initSite.rejected, (state) => {
      // Add user to the state array
      state.authUser = null;
      state.isSiteInited = true;
    });
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setSiteInited } = mainSlice.actions
export {
  initSite,
};

export default mainSlice.reducer;
