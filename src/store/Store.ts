import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { templateSlice } from "./templateSlice/TemplateSlice";

const store = configureStore({
  reducer: {
    template: templateSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
