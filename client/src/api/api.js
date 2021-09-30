import * as axios from "axios";

let deploy = false
export  const errorReporte =(string,e)=>{
    if(deploy){
        alert(JSON.stringify(e) + string)
    }else {
        console.warn(JSON.stringify(e)  + string)
    }
}
export const instanse = axios.create({
    baseURL: 'http://localhost:3001/',
    headers:{}
})



export const downloadCardsApi = async () => {
    try {
        return await instanse.get(`api/cards/`,{},{})
    }
    catch (e) {
        errorReporte('problem in  downloadCardsApi', e)
    }
}





