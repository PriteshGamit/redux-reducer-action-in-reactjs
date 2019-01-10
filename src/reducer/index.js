
import {RECEVIE_API_DATA} from "../action/Action";
import {combineReducers} from 'redux';

export const data=(state={},{type, data})=>
{
    switch(type)
    {
        case RECEVIE_API_DATA:
        console.log("Reducer:",data);
        return {data};
        default:
        return state;
    }
};

export default combineReducers({data});