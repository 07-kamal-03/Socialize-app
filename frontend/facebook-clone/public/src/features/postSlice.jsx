import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.value.unshift(action.payload);
        },
        addAllPost: (state, action) => {
            // state.unshift(action.payload);
        }
    }

});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;