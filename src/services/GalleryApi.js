import configsForAPI from "../configs/config";



const GetPhotosbyquery = async (query, per_page = 20, order_by = "relevant") => {


    const url = `${configsForAPI.baseUrl}&query=${query}&per_page=${per_page}&order_by=${order_by}` ;
    const Response = await fetch(url);
    const Json = await Response.json();
    return Json;
    

}



export default GetPhotosbyquery;