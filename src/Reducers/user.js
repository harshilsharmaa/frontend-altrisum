import {createReducer} from '@reduxjs/toolkit';


const initialState = {};

export const userReducer = createReducer(initialState,{

    LoginRequest: (state)=>{
        state.loading = true;
    },
    LoginSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticate = true;
    },
    LoginFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    RegisterRequest: (state)=>{
        state.loading = true;
    },
    RegisterSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticate = true;
    },
    RegisterFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    LoadUserRequest: (state)=>{
        state.loading = true;
    },
    LoadUserSuccess: (state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticate = true;
    },
    LoadUserFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    LogoutUserRequest: (state)=>{
        state.loading = true;
    },
    LogoutUserSuccess: (state)=>{
        state.loading = false;
        state.user = null;
        state.isAuthenticate = false;
    },
    LogoutUserFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = true;
    },
});