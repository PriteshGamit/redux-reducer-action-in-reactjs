import {REQUEST_API_DATA,receiveapidata} from '../action/Action';

import {takeLatest ,call,put} from 'redux-saga/effects';
import {fetchData} from '../Api';


function*  getapidata(action)
{
    try
    {
        const data= yield call(fetchData);
        console.log("data:",data);
        yield put(receiveapidata(data));
    }catch(e)
    {
        console.log(e);
    }
}
export default function* mySaga()
{
    yield takeLatest(REQUEST_API_DATA,getapidata)
    console.log("data");
}