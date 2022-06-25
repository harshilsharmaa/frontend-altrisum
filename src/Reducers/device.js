import {createReducer} from '@reduxjs/toolkit';


const initialState = {};

export const deviceReducer = createReducer(initialState,{

    addDeviceRequest: (state)=>{
        state.loading = true;
    },
    addDeviceSuccess: (state, action)=>{
        state.loading = false;
        state.device = action.payload;
        state.isAuthenticate = true;
    },
    addDeviceFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },


    allDeviceRequest: (state)=>{
        state.loading = true;
    },
    allDeviceSuccess: (state, action)=>{
        state.loading = false;
        state.allDevices = action.payload;
        state.isAuthenticate = true;
    },
    allDeviceFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

});