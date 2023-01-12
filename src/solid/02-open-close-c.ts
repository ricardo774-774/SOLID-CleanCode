//import axios from "axios";


export class HttpClient {

    //   No ser dependiente de una libreria externa   //

    // async get( url: string ) {
    //     const { data, status } = await axios.get(url);
    //     return {data, status};
    // }

    async get( url: string ) {
        const response = await fetch( url );
        const data = await response.json();

        return {
            data: data,
            status: response.status
        };
    }

}