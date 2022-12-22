import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface ITest{
    num: number
}

const initialState:ITest = {
    num: 0
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addNum: (state, action:PayloadAction<number>) => {
            state.num += action.payload
        }, 
        removeNum: (state, action:PayloadAction<number>) => {
            state.num -= action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action:any) => {
            state.num = action.payload.test.num
        })
    }
})

export const { addNum, removeNum } = testSlice.actions

export default testSlice.reducer