/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../Store';


// export const signupUser = createAsyncThunk(
//     '/signup',
//     async (userData) => {
//         const response = await axios.post('/signup', userData);
//         return response.data;
    
//     }
// );

// export const loginUser = createAsyncThunk(
//     '/login',
//     async (userData, thunkAPI) => {
//         try {
//             const response = await axios.post('/login', userData);
//             return response.data;
//         } catch(e) {
//             return thunkAPI.rejectWithValue({status: e.response.status, data: e.response.data});
//         }   
         
//     }
// );



export const templateSlice = createSlice({
    name: 'template',
    initialState: {
        isAuthenticated: false,    
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        },
        login: (state) => {
            state.isAuthenticated = true;

            return state;
        },
    },
    extraReducers: {
        // [signupUser.fulfilled]: (state) => {
        //     state.isFetching = false;
        //     state.isSuccess = true;
        // },
        // [signupUser.pending]: (state) => {
        //     state.isFetching = true;
        // },
        // [signupUser.rejected]: (state, { payload }) => {
        //     state.isFetching = false;
        //     state.isError = true;
        //     state.errorMessage = payload.message;
        // },
        // [loginUser.fulfilled]: (state) => {
        //     state.isAuthenticated=true;
        //     state.isFetching = false;
        //     state.isSuccess = true;
        //     return state;
        // },
        // [loginUser.rejected]: (state, { payload }) => {
        //     state.isAuthenticated=false;
        //     state.isFetching = false;
        //     state.isError = true;
        //     state.errorMessage = payload.data.message;
        // },
        // [loginUser.pending]: (state) => {
        //     state.isFetching = true;
        // },
    },
});

export const { clearState,login } = templateSlice.actions;
export const templateSelector = (state: RootState) => state;