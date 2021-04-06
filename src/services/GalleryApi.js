



const GetPhotosbyquery = async (query, per_page = 20 ) => {

   
    const url = `${process.env.REACT_APP_HOST}&query=${query}&per_page=${per_page}&order_by=relevant` ;
    const Response = await fetch(url);
    const Json = await Response.json();
    return Json;
    

}



export default GetPhotosbyquery;