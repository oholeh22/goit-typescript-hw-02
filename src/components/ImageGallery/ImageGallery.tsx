import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'; 
import { ImageGalleryProps } from '../App/App.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, alt_description, urls, user, likes }) => (
                <li 
                    key={id} 
                    className={css.galleryItem} 
                    onClick={() => openModal({ id, alt_description, urls, user, likes })}
                >
                    <ImageCard 
                        src={urls.regular} 
                        alt={alt_description || ''} 
                        avgColor={urls.regular}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;