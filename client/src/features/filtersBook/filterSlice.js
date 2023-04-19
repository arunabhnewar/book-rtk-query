import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = {
    status: "All",
    search: "",
}

// Create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        statusToggled: (state, action) => {
            state.status = action.payload;
        },
        searched: (state, action) => {
            state.search = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const { statusToggled, searched } = filterSlice.actions;