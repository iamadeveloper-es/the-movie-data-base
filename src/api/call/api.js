import { basePath } from "../base";

export default class Api{

    static get(path){

        const api_key = process.env.VUE_APP_PRIVATE_KEY

        const url = new URL(basePath)
        url.searchParams.append('api_key', api_key)

        if(path){
            url.pathname = url.pathname + path
        }

        return fetch(url)
    }
}