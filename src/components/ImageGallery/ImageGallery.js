import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGallery({pictures}){
    return (
        <ul className={s.ImageGallery}>
        {pictures.map(picture=> (
            <li className={s.ImageGalleryItem} key={picture.id}>
            <ImageGalleryItem picture={picture}/>
            </li>
        ))
        }
        </ul>
    )
}

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape).isRequired,
}
