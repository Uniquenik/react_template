import {Action, UserInfo} from "../../app.shared/app.models/models";
import {userActionTypes} from "./user-action-types";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../createstore";
import {multiply} from 'ramda'


export const loginUser = (email:string, password:string):ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
        console.log('here')
        dispatch(setLoading(true))
        const localState = getState()
        console.log(localState)
        const multiply2 = multiply(2)
        console.log(multiply2(3))
        //делаем тут запрос (не к firebase) и сохраняем данные в redux
        await setTimeout(() => {dispatch(setLoading(false))}, 1000)
}

export const setUser = (user: UserInfo) => {
    return {
        type: userActionTypes.SET_USER,
        payload: user
    }
}

export const setLoading = (bool: boolean) => {
    return {
        type: userActionTypes.SET_LOADING,
        payload: bool
    }
}