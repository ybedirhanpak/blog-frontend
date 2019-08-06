import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Persistance
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//Reducers

//Combine reducers
const rootReducer = combineReducers({});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
