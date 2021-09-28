import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    RootState
} from '../store';
import { User} from '../types';


const login:boolean = window.localStorage.getItem('login') === 'true';

const initialState:User = {
    name:'',
    login:login
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        goLogin:(state,action:PayloadAction<boolean>)=>{
            window.localStorage.setItem('login','true')
            state.login = action.payload
        }
    }
})

export const {
    goLogin
} = UserSlice.actions;

export const user = (state:RootState) => state.user;

export default UserSlice.reducer;