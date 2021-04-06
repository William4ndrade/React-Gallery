// import configsForAPI from "../configs/config";



const GetPhotosbyquery = async (query, per_page = 20 ) => {

    const one =  "relevant"
    const two = "latest"     
    var order_by = null
    const sortNumber = Math.floor(Math.random() * 2)
    if(sortNumber === 0){
        order_by = one
    }else{
        order_by = two
    }

    const value = order_by[sortNumber]
    const url = `${process.env.API_URL || configsForAPI.baseUrl}&query=${query}&per_page=${per_page}&order_by=${order_by}` ;
    const Response = await fetch(url);
    const Json = await Response.json();
    return Json;
    

}



export default GetPhotosbyquery;