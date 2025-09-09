import React, { useState } from "react";
import { galleryDataFromDatabase } from "../gallery";

export const Gallery = () => {
    const [gallery, setGallery] = useState(galleryDataFromDatabase)
    //létrehozok egy state-t: gallery
    //inicializálom a state-t a galleryDataFromDatabase-el
    return (
        <div className="d-flex flex-column gap-2">
            {/*a state-n meghívod a map-t és csak az objektumok url-t jeleníted meg egy img tagben */}
            {gallery.map(obj =>
                <img src={obj.url} alt="" key={obj.id}/>
            )}
        </div>
    )
}