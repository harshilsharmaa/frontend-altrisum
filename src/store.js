import {configureStore} from '@reduxjs/toolkit'

import {userReducer} from './Reducers/user'
import {deviceReducer} from './Reducers/device'

const store = configureStore({
    reducer:{
        user: userReducer,
        device: deviceReducer,
        allDevices: deviceReducer
    },
})

export default store;