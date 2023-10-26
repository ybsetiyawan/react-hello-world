
import axios from "axios";
import { OnlineRoot, RootPath } from "./Config"; 


const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        // membuat action global untuk GET
        axios.delete(`${root ? OnlineRoot : RootPath }/${path}`)
            .then((result) => {
                // console.log(result.data)
               resolve(result.data);
            }, (err) => {
                reject(err);
        })
    })
    return promise;
}

export default Delete;