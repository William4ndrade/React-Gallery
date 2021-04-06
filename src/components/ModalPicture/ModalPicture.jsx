import React, { useEffect, useState } from 'react';
import './ModalPicture.css';
import Modal from "react-modal"



const ModalPicture = ({src, title, tags = [], description, isOpen, ChangeModalStateOnPhoto}) => {

    const [ModalOpen, SetModalOpen] = useState(isOpen)
    


    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.859)'
          },


        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : "white",
          height                : "95%",
          width                 : "40%",
          padding               : "0",

        }
      };

     useEffect(() => {
        SetModalOpen(isOpen)
     }, [isOpen])

     useEffect(() => {
        if(!ModalOpen){
            document.body.style.overflow = "auto"
            ChangeModalStateOnPhoto()
        }else{
            document.body.style.overflow = "hidden"
        
        }
     }, [ModalOpen])


    return(
        <>
            <Modal ariaHideApp={false} onRequestClose={() => SetModalOpen(false)} preventScroll={true} isOpen={ModalOpen} style={customStyles}  >
                <div className="picture">
                    <img draggable="false" className="pictureimg" src={src} />
                    <i onClick={() => SetModalOpen(false)} class="fas fa-times-circle closeicon"></i>
                </div>
                <div className="content">
                    <h3 className="title"> <i className="fas fa-grip-lines-vertical"></i> {title}</h3>
                    <p className="description"><strong>Description:</strong> {description ? description : "Não existe descrição para essa imagem no momento"}</p>
                    
                { tags.length > 0 ?   (<div className="tagsarea">{
                        <>
                        <h3 className="titletags">Tags</h3>

                        <div className="tags">
                            {tags.map(e => {
                                return <p className="tag">{e.title}</p>
                            })}
                       </div>
                        </>
                    }</div>) : ""}
                    <a target="_blank" className="downloadbutton" href={src}><i class="fas fa-arrow-circle-down"></i></a>
             
                </div>



            </Modal>
    
        </>

    )
}

export default ModalPicture;