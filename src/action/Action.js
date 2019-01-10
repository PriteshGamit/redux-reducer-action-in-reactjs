export const REQUEST_API_DATA="REQUEST_API_DATA";
export const RECEVIE_API_DATA="RECEVIE_API_DATA";

export const requsetapidata = () =>({type: REQUEST_API_DATA});
export const receiveapidata = data => ({type:RECEVIE_API_DATA,data});

