import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';


export default function ImageGalleryItem({picture}) {
    return (
        <>
            <img src={picture.webformatURL} alt={picture.tags} className={s.ImageGalleryItemImage} />
        </>
    )
}

ImageGalleryItem.propTypes = {
    picture: PropTypes.object,
}