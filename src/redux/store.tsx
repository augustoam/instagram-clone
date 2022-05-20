import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AuthState from './authentication/models/AuthState';
import authReducer from './authentication/reducer';
import PushNotificationState from './notification/models/PushNotificationState';
import pushNotificationReducer from './notification/reducer';
import AlertState from './ui/alert/models/AlertState';
import alertReducer from './ui/alert/reducer';
import SliderIntroState from './ui/intro/models/SliderIntroState';
import sliderIntroReducer from './ui/intro/reducer';
import LoaderState from './ui/loader/models/LoaderState';
import loaderReducer from './ui/loader/reducer';
import UserState from './user/models/UserState';
import userReducer from './user/reducer';

const persistConfig = {
    key: 'reactBaseApp',
    storage: AsyncStorage,
    whitelist: [
        'authReducer', 'userReducer', 'sliderIntroReducer', 'pushNotificationReducer',
    ],
    blacklist: ['loaderReducer', 'alertReducer'],
};

const middlewares = [thunk];
const rootReducers = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    loaderReducer: loaderReducer,
    alertReducer: alertReducer,
    sliderIntroReducer: sliderIntroReducer,
    pushNotificationReducer: pushNotificationReducer
})

export interface AppState {
    authReducer: AuthState
    userReducer: UserState
    loaderReducer: LoaderState
    alertReducer: AlertState
    sliderIntroReducer: SliderIntroState
    pushNotificationReducer: PushNotificationState
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares)) as Store;

export const persistor = persistStore(store);