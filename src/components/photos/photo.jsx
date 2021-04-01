import React, { useEffect, useState } from 'react';
import "./photo.css";
import "../../services/GalleryApi";
import GetPhotosbyquery from '../../services/GalleryApi';



const Photos = ( {query, title, HeaderOpen }    ) => {


  const [Posts, SetPosts] = useState([])
  const [errors, SetErros] = useState(false)
  
  async function PushImages(){
    
     const Response = await GetPhotosbyquery(query);

     if(Response.total > 0){
       SetErros(false)
        const copyState = [...Posts];
        Response.results.forEach(e => {
          copyState.push({
            id: e.id,
            alt_description: e.alt_description,
            description: e.description,
            url: e.urls.regular
  
          })
  
        })
  
        SetPosts(copyState)
     }else{
        SetErros(true)


     }
      
     
     
  }




  useEffect(() => {
      const a = async () => await PushImages()  
      a()

  }, [])

    return (
     
        <div className="contatiner-gallery" style={
          HeaderOpen ? {width: "80%", left: "18%"} : {width: "80%", left: "8%"}
        }>
         {console.log(HeaderOpen)} 
           <h1 className="title"> <i className="fas fa-grip-lines-vertical"></i> {title}</h1>
            {
              Posts.length > 0  ? 
              Posts.map((e,i) => {
                 return <img className="imagesgallery" key={i} src={e.url} alt={e.alt_description} />


              })
              :
              <div className="feedback"> 
                    {errors ?  <h1> Not Found - 404 </h1>  :                
                  
                <>
                  <p>Loading</p>
                  <svg className="loading" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ shapeRendering: 'auto' , background: "rgba(255, 255, 255, 0) none repeat scroll 0% 0%", display:"block", width:"100px", height:"100px", viewBox:"0 0 100 100" ,preserveAspectRatio:"xMidYMid" }}>
                  <g>
                    <circle cx="60" cy="50" r="4" fill="#000000">
                      <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate>
                      <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate>
                    </circle>
                    <circle cx="60" cy="50" r="4" fill="#000000">
                      <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate>
                      <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate>
                    </circle>
                    <circle cx="60" cy="50" r="4" fill="#000000">
                      <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate>
                      <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
                    </circle>
                  </g><g transform="translate(-15 0)">
                    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#efaa14" transform="rotate(90 50 50)"></path>
                    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#efaa14">
                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                    </path>
                    <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#efaa14">
                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                    </path>
                  </g>
                  </svg>
             
                  </>
                  
                  }
                </div>

            

            }
        </div>

  )
}

export default Photos;