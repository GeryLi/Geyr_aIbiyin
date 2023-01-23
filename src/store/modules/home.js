// @ts-nocheck
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getDiscountData, getHomeHightScoreData, getHomePriceData, getRecommendData, getWantToDoData } from '../../services'

export const fetchHomeDataAction = createAsyncThunk('fetchhomedata', (payload,{dispatch})=>{
    getHomePriceData().then(res=> dispatch(changegoodPriceInfo(res)))

    getHomeHightScoreData().then(res=> dispatch(changeHighScoreInfo(res) ))
    getDiscountData().then(res=> dispatch(changeDiscountInfo(res)) )
    getRecommendData().then(res=>dispatch(changeRecommendInfo(res)))
    getWantToDoData().then(res=>dispatch(changeWantToDoInfo(res)))
    
})
const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceInfo:{},
        hightScoreInfo:{},
        discountInfo:{},
        recommendInfio:{},
        wantTodoInfo:{}
    },
    reducers:{
        changegoodPriceInfo( state,{payload} ){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfo(state,{payload}){
            state.hightScoreInfo = payload
        },
        changeDiscountInfo(state,{payload}){
            state.discountInfo = payload
        },
        changeRecommendInfo(state,{payload}){
            state.recommendInfio = payload
        },
        changeWantToDoInfo(state,{payload}){
            state.wantTodoInfo = payload
        }
    }
   
})
export const {
    changegoodPriceInfo,
    changeHighScoreInfo,
    changeDiscountInfo,
    changeRecommendInfo,
    changeWantToDoInfo
} = homeSlice.actions 
export default homeSlice.reducer