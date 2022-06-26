import {configureStore} from '@reduxjs/toolkit'

import {userReducer,forgotPasswordReducer} from './Reducers/user'
import {deviceReducer} from './Reducers/device'

const store = configureStore({
    reducer:{
        user: userReducer,
        device: deviceReducer,
        allDevices: deviceReducer,
        liveData: deviceReducer,
        resetPassword: forgotPasswordReducer,
    },
})

export default store;