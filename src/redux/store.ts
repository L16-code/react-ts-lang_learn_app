// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./slices"
// export const store = configureStore({
//     reducer: {
//         root: rootReducer
//     }
// });
import { configureStore } from "@reduxjs/toolkit";
import  rootReducer  from "./slices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        root: persistedReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// store;
export const persistor = persistStore(store);

