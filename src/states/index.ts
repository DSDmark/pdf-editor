// // redux
// // constants
// import { baseApi } from "@/api";
// import {
//   DEV,
//   PERSIST_BLACKLIST,
//   PERSIST_DATA_TIME,
//   PERSIST_VERSION,
//   PERSIST_WHITELIST, // PERSIST_WHITELIST,
//   STATE_MIGRATIONS,
// } from "@/constants";
// // utils
// import { createPersistStorageUtil } from "@/utils";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   createMigrate,
//   persistReducer,
//   persistStore,
// } from "redux-persist";

// import { rtkQueryErrorLogger } from "./middleware";
// // reducers
// import assessmentReducer from "./reducers/assessment";
// import searchReducer from "./reducers/common";
// import permissionReducer from "./reducers/permission";
// import translationReducer from "./reducers/translationSlice";
// import uiReducer from "./reducers/ui";
// import userReducer from "./reducers/user";

// // persistent store
// const persistConfig = {
//   key: "root",
//   version: PERSIST_VERSION,
//   storage: createPersistStorageUtil(),
//   whitelist: PERSIST_WHITELIST,
//   blacklist: PERSIST_BLACKLIST,
//   migrate: createMigrate(STATE_MIGRATIONS, { debug: DEV }),
// };

// const rootReducer = combineReducers({
//   [baseApi.reducerPath]: baseApi.reducer,
//   ui: uiReducer,
//   user: userReducer,
//   searchCommonData: searchReducer,
//   translationData: translationReducer,
//   assessment: assessmentReducer,
//   permissions: permissionReducer,
// });

// const makeStore = () => {
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
//   // eslint-disable-next-line no-console
//   console.error("please remove redux option devTool to set DEV variable!");
//   const store = configureStore({
//     devTools: true,
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           warnAfter: PERSIST_DATA_TIME,
//         },
//         immutableCheck: { warnAfter: PERSIST_DATA_TIME },
//       }).concat(baseApi.middleware, rtkQueryErrorLogger),
//   });
//   const persistor = persistStore(store);
//   return { store, persistor };
// };

// const { store, persistor: persistorStore } = makeStore();
// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const persistor = persistorStore;

// // actions
// export {
//   setCurrentUser,
//   setNotification,
//   resetUser,
//   setIsLoggedIn,
// } from "./reducers/user";
// export {
//   setPagePerItm,
//   setInterFaceLanguagesList,
//   setGlobalLoader,
//   setSelectedTranslationUILanguage,
// } from "./reducers/ui";
// export {
//   setAssessmentDetails,
//   setAssessmentStatusAndSteps,
//   setSelectedLang,
// } from "./reducers/assessment";
// // export { setTranslationData } from "./reducers/translationSlice"
// export { setPermissions } from "./reducers/permission";
// export { setReportLanguage } from "./reducers/common";

// // store
// export default store;
