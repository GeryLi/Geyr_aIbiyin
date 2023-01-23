import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEntireRoomList } from '../../services'


export const fetchEntiredDataAction = createAsyncThunk('fetchentiredata', (payload,{getState,dispatch})=>{
    // getHomePriceData().then(res=> dispatch(changegoodPriceInfo(res)))
    const pagesIndex = getState().entire.currentPage
    getEntireRoomList(pagesIndex * 20).then(res=> dispatch(changeRoomListInfo(res)))
    getEntireRoomList(pagesIndex * 20).then(res=> dispatch(changeTotlePages(res.totalCount)))
  


   
})



const entireSlice = createSlice({
    name:'entire',
    initialState:{
        currentPage:0,
        totlePages:0,
        roomList:[],
        

    },
    reducers:{
        changeCurrentPage( state,{payload} ){
            state.currentPage = payload
        },
        changeTotlePages( state,{payload} ){
            state.totlePages = payload
        },
        changeRoomListInfo( state,{payload} ){
            console.log(payload);
            state.roomList = payload
            
        }
        
    }
})
export const {
    changeCurrentPage,
    changeTotlePages,
    changeRoomListInfo,
    
} = entireSlice.actions 

export default entireSlice.reducer 