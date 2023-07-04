import { createSelector } from "@reduxjs/toolkit";

export const selectUser = state => state.auth.user;
export const selectUserToken = state => state.auth.token;

export const selectIsAuth = createSelector([selectUserToken], token => Boolean(token));