import {configureStore} from '@reduxjs/toolkit'
import authslice from './reducers/auth'




const store = configureStore({
    reducer:{
        [authslice.name]:authslice.reducer,
    },
    // middleware: (mid) =>[...mid(),api.middleware]
})


export default store