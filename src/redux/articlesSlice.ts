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

const pageSize: number = 10;
const pageTotal: number = parseInt((testArticleData.length / pageSize).toString()) - 1;

interface IArticleState {
    articles:Article[]
    pageTotal:number
    viewArticles:Article[]
    page:number
}

const initialState:IArticleState = {
    articles:testArticleData,
    pageTotal:pageTotal,
    viewArticles:testArticleData.slice(0 * pageSize, pageSize + 0 * pageSize),
    page:0
} 

interface ShowArticleAction {
    page:number
    sTag:string[]
}


export const ArticlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        refresh:(state,action:PayloadAction<Article[]>)=>{
            state.articles = action.payload
        },
        showArticles:(state,action:PayloadAction<ShowArticleAction>)=>{
            state.page = action.payload.page;

            let searchArticles:Article[] = [];
            if(action.payload.sTag.length > 0){
                state.articles.forEach(sAItem=>{
                    //判断是否有交集
                    let jAry = sAItem.tags.filter(function(v){ return action.payload.sTag.indexOf(v) > -1 });
                    if(jAry.length > 0){
                        searchArticles.push(sAItem)
                    }
                })
            }else {
                searchArticles = state.articles;
            }

            state.viewArticles = searchArticles.slice(action.payload.page * pageSize, pageSize + action.payload.page * pageSize);
            state.pageTotal = parseInt((searchArticles.length / pageSize).toString()) - 1;

            state = JSON.parse(JSON.stringify(state));
        },
        
    }
})

export const {
    refresh,
    showArticles
} = ArticlesSlice.actions;

export const articles = (state:RootState) => state.articles;


export const articleSearchTags = (state:RootState) => {
    let tags : string[] = [];
    state.articles.articles.forEach(aItem=>{
        aItem.tags.forEach((tItem: string)=>{
            tags.push(tItem)
        })
    });
    return tags;
}

export default ArticlesSlice.reducer;