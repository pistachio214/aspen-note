import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { UserBaseInfo, UserState } from "@/redux/types/user";

const initialState: UserState = {
    data: {
        nickname: '',
        avatar: ''
    }
};

interface PromiseNum {
    number: number;
}

const promise_one: Promise<PromiseNum> = new Promise((res, _) => {
    setTimeout(() => {
        res({ number: 10 });
    }, 3000);
});

// 异步Action
export const getAsyncInfo = createAsyncThunk("getAsyncInfo", async () => {
    const data = await promise_one;
    return data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state: UserState, action: PayloadAction<UserBaseInfo>) => {
            state.data = action.payload
        },
        clearUserState: (state: UserState) => {
            state = initialState
        },
        saveUserAvatar: (state: UserState, action: PayloadAction<string>) => {
            state.data.avatar = action.payload
        }
    },
    extraReducers: (builder) => {
        // 进行请求阶段的一些操作
        builder.addCase(getAsyncInfo.pending, () => {
            console.log("进行中");
        });
        builder.addCase(getAsyncInfo.fulfilled, (state, action) => {
            console.log("action.payload: ", action.payload); //{number:"10"}
            console.log("state: ", state);
            // todo 这里进行状态的更改

            console.log("成功");
        });
        builder.addCase(getAsyncInfo.rejected, () => {
            console.log("失败");
        });
    },
});

export const { 
    setUserData, 
    clearUserState, 
    saveUserAvatar 
} = userSlice.actions;
export default userSlice.reducer;




