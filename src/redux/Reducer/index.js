/**
 * Created by xiaohe on 2018/5/16.
 */
import {combineReducers} from 'redux';
import {AppB, AppBasyn} from './AppB.js';
import AppC from './AppC.js';
import AppD from './AppD.js';
import {AppLoginThunk,AppLoginSaga,AppLoginButtonThunk,AppLoginButtonSaga} from './AppLogin.js';
import {AppReduxRequest} from './AppRedux/reducer.appRedux';

const Reducer = combineReducers({
    AppB: AppB,
    AppBasyn: AppBasyn,
    AppC: AppC,
    AppD: AppD,
    AppLoginThunk: AppLoginThunk,
    AppLoginSaga: AppLoginSaga,
    AppLoginButtonThunk: AppLoginButtonThunk,
    AppLoginButtonSaga: AppLoginButtonSaga,
    AppReduxRequest:AppReduxRequest
});
export default Reducer