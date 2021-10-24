import { basePath } from "../base";

export default class Api{

    static get(path, queryParams){

        const api_key = process.env.VUE_APP_PRIVATE_KEY

        const url = new URL(basePath)
        url.searchParams.append('api_key', api_key)
        url.searchParams.append('language', 'es-ES')

        if(path){
            
            url.pathname = url.pathname + path
        }

        if(queryParams){

            for(let key in queryParams){
                url.searchParams.append(key, queryParams[key])
            }
        }

        return fetch(url)
    }
}