import React, { useEffect, useState } from 'react';
import "./photo.css";
import "../../services/GalleryApi";
import GetPhotosbyquery from '../../services/GalleryApi';
import MolalPicture from "../ModalPicture/ModalPicture"
import ModalPicture from '../ModalPicture/ModalPicture';



const Photos = ( {query, title, HeaderOpen, search = false }    ) => {


  const [Posts, SetPosts] = useState([])
  const [errors, SetErros] = useState(false) 
  const [modalconfig, SetModalconfig] = useState({
    isOpen: false,
    title:null,
    description: null,
    tags:[],
    src:null,
  })
  

  
  async function PushImages(){
    
     const Response = await GetPhotosbyquery(query);

     if(Response.total > 0){
       SetErros(false)
        const copyState = [];
        
        Response.results.forEach(e => {
          copyState.push({
            id: e.id,
            alt_description: e.alt_description,
            description: e.description,
            url: e.urls.regular,
            tags: e.tags,


  
          })
  
        })
  
         SetPosts(copyState)
     }else{
        SetErros(true)


     }
      
     
     
  }



  function OpenModal(title, src, description, tags){
      SetModalconfig({
          isOpen: true,
          description,
          tags,
          src,
          title
      })

      
  }

  function ChangeModalStateOnPhoto(){
      SetModalconfig({
        isOpen: false,
        title:null,
        description: null,
        tags:[],
        src:null,
      })
  }


  useEffect(() => {
      const a = async () => await PushImages()  
      a()

  }, [query])

    return (
     
        <div className="contatiner-gallery" style={
          HeaderOpen ? {width: "80%", left: "18%"} : {width: "90%", left: "8%"}
        }>

          

           <h1 className="title"> <i className="fas fa-grip-lines-vertical"></i> {title}</h1>


            {
              Posts.length > 0  ? 
              Posts.map((e,i) => {
                       
                 return (
                  <div onClick={() => OpenModal(title, e.url, e.description, e.tags)} description={"Description: "  +  (e.description ? e.description : "Sem detalhes no momento")} key={i} id={i} className="images">
                    <img  draggable={false} className="imagesgallery" key={i} src={e.url}  />
                  </div>
                 )


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
            <ModalPicture ChangeModalStateOnPhoto={ChangeModalStateOnPhoto} tags={modalconfig.tags} isOpen={modalconfig.isOpen} description={modalconfig.description} title={modalconfig.title} src={modalconfig.src}/>
        </div>

  )
}

export default Photos;