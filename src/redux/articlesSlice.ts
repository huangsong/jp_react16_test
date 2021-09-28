import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    RootState
} from '../store';
import { Article } from '../types';

let testArticleData:Article[] = [];

for(let i = 0; i< 1000;i++){
    let tary:string[] = []
    for(let ti = 0; ti < i%9; ti++){
        tary.push(Math.random().toString(36).substring(2,8))
    }
    testArticleData.push({
        "id":i+1,
        "author":{
            "name":"alibaba",
            "face":"http://www."
        },
        "tags":tary,
        "time":1929938328,
        "title":"这里是标题"+i,
        "thumb":"http://sadfasdf"
    })
}

const initialState:Article[] = testArticleData

export const ArticlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        refresh:(state,action:PayloadAction<Article[]>)=>{
            state = action.payload
        }
    }
})

export const {
    refresh
} = ArticlesSlice.actions;

export const articles = (state:RootState) => state.articles;

export const searchArticleResult = (state:RootState,sKey:string,page:number) =>{
    console.log(sKey,page);
}

export const articleSearchTags = (state:RootState) => {
    let tags : string[] = [];
    state.articles.forEach(aItem=>{
        aItem.tags.forEach((tItem: string)=>{
            tags.push(tItem)
        })
    });
    return tags;
}

export default ArticlesSlice.reducer;