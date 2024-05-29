import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:StateType={
    loading: false,
    words:[],
    result:[],
    isAuthenticated:false,
    user:null,
}

const rootSlice=createSlice({
    name:"root",
    initialState,
    reducers:{
        getWordsRequest:(state )=>{
            state.loading=true;
        },
        getWordsSuccess:(state,action:PayloadAction<WordType[]>)=>{
            state.loading=false;
            state.words=action.payload;
        },
        getWordsFail:(state,action:PayloadAction<string>)=>{
            state.loading=false;
            state.error=action.payload;
        },
        saveResult:(state,action:PayloadAction<string[]>)=>{
            state.loading=false;
            state.result=action.payload;
        },
        clearState:(state)=>{
            state.loading=false;
            state.result=[];
            state.words=[];
            state.error=undefined;
        },
        login: (state, action: PayloadAction<UserType>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    },
})
export const {getWordsFail,getWordsSuccess,getWordsRequest,clearState,saveResult,login,logout,}=rootSlice.actions;
export default rootSlice.reducer