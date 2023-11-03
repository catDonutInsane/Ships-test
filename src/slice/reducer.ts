import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { itemType } from "../types/types";
import { nations } from "../types/nations.types";
import { classes } from "../types/classes.type";
import { rank } from "../types/rank.type";
type paramsType ={
    nations:nations,
    shipType:classes,
    rank:rank
}
type IS={
    data:itemType[],
    sortedData:itemType[],
    params:paramsType
   
}
const initialState:IS={
    data:[],
    sortedData:[],
    params:{
        nations:"All",
        shipType:"All",
        rank:"All"
    }
}

const reducer = createSlice({
    name:'ships',
    initialState,
    reducers:{
        getData(state,action){
            state.data = action.payload
        },
        sortingByNations(state, action:PayloadAction<paramsType>){
            state.params.nations=action.payload.nations
            state.params.rank=action.payload.rank
            state.params.shipType=action.payload.shipType
       
            state.sortedData =[...state.data.filter(i=>{
                if(state.params.nations!=="All"){
                    return i.nation.title===action.payload.nations
                }
                else {
                    return i
                }
            })
            .filter(i=>{
                if(state.params.rank!=="All"){
                    return i.level==action.payload.rank
                }
                else {
                    return i
                }
            })
            .filter(i=>{
                if(state.params.shipType!=="All"){
                    return i.type.title===action.payload.shipType
                }
                else {
                    return i
                }
            })        
            ]
        }
     
    }
})
export const {getData,sortingByNations} = reducer.actions
export default reducer.reducer