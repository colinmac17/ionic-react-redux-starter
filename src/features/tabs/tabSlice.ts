import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tabs",
  initialState: {
    tabOneTitle: "Tab 1",
    tabTwoTitle: "Tab 2",
    tabThreeTitle: "Tab 3",
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    changeTabOneTitle: (state, action) => {
      state.tabOneTitle = action.payload;
    },
    changeTabTwoTitle: (state, action) => {
      state.tabTwoTitle = action.payload;
    },
    changeTabThreeTitle: (state, action) => {
      state.tabThreeTitle = action.payload;
    },
  },
});

//Thunks
export const changeTabTitleAsync = (title: string) => (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  setTimeout(() => {
    dispatch(changeTabOneTitle(title));
    dispatch(changeTabTwoTitle(title));
    dispatch(changeTabThreeTitle(title));
  }, 1000);
};

//Action creators
export const {
  changeTabOneTitle,
  changeTabTwoTitle,
  changeTabThreeTitle,
} = tabSlice.actions;

//Selector functions
export const selectTabOneTitle = (state: { tabs: { tabOneTitle: any } }) =>
  state.tabs.tabOneTitle;
export const selectTabTwoTitle = (state: { tabs: { tabTwoTitle: any } }) =>
  state.tabs.tabTwoTitle;
export const selectTabThreeTitle = (state: { tabs: { tabThreeTitle: any } }) =>
  state.tabs.tabThreeTitle;

export default tabSlice.reducer;
