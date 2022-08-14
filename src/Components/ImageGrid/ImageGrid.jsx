import React from "react";
import './ImageGrid.css';

export default function ImageGrid({images}) {
    return <div className="image-grid grid grid-cols-4 gap-4">
        {images.map(image => (
            <img
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
                width={image.webformatWidth}
                className="rounded-lg"/>
        ))}
    </div>
}