import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
    const response = await fetch('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs');
    const data = await response.json();
    console.log("Response: ", data)
    return data;
});

export const fetchBlogDetails = createAsyncThunk('blog/fetchBlogDetails', async (id) => {
    const response = await fetch(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`);
    const data = await response.json();
    console.log("Detail Blog: ", data)
    return await data;
});

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        blogDetails: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handling fetchBlogs actions
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handling fetchBlogDetails actions
            .addCase(fetchBlogDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogDetails = action.payload;
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default blogSlice.reducer;
