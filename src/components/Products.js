import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Products = () => {
    const images = [
        {
            original: 'https://www.haaganleipa.fi/application/files/cache/6cfb1c5751006835e404a43dc7508b69.jpg',
            thumbnail: 'https://www.haaganleipa.fi/application/files/cache/6cfb1c5751006835e404a43dc7508b69.jpg',
        },
        {
            original: 'https://www.haaganleipa.fi/application/files/cache/4a1cac9d5e5e581e91d281b912292349.jpg',
            thumbnail: 'https://www.haaganleipa.fi/application/files/cache/4a1cac9d5e5e581e91d281b912292349.jpg',
        },
        {
            original: 'https://www.haaganleipa.fi/application/files/cache/6a2bbe22d7a00063fedc262c6244693a.jpg',
            thumbnail: 'https://www.haaganleipa.fi/application/files/cache/6a2bbe22d7a00063fedc262c6244693a.jpg',
        },
    ];
    return <ImageGallery items={images} sizes={10}/>
}

export default Products
