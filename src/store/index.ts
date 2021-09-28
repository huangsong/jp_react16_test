import {configureStore} from '@reduxjs/toolkit'
import ArticlesSlice from '../redux/articlesSlice'
import UserSlice from '../redux/userSlice'

const store = configureStore({
    reducer:{
        articles:ArticlesSlice,
        user:UserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store