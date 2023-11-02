import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitState {
    userData:object;
}

const initialState: InitState = {
    userData: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData(state: InitState, action: PayloadAction<InitState>)  {
            state.userData = action.payload.userData;
        },
        getUserData(state:InitState):InitState{
            return state;
        }
    },
});

export const { setUserData , getUserData } = userSlice.actions;

export default userSlice.reducer;
