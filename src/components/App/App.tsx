import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { getPhotos } from '../ApiService/Photos';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/Modal';
import { Image } from '../App/App.types';

function App(): JSX.Element {
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<Photo | null>(null);

    const fetchImages = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getPhotos(query, page);
            if (data && data.results && data.results.length > 0) {
                setImages((prevImages) => [...prevImages, ...data.results]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Failed to load images. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query && page > 0) {
            fetchImages();
        }
    }, [query, page]);

    const handleLoadMore = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const openModal = (image: Image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getNewQuery = (newQuery: string) => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
        setHasMore(true);
    };

    return (
        <div>
            <SearchBar setQuery={getNewQuery} />
            {error ? (
                <ErrorMessage />
            ) : (
                <>
                    <ImageGallery images={images} openModal={openModal} />
                    {loading && <Loader />}
                    {!loading && hasMore && (
                        <LoadMoreBtn loadMore={handleLoadMore} hasImages={images.length > 0} />
                    )}
                    {!hasMore && !loading && <p>No more images to load</p>}
                </>
            )}
            {isModalOpen && modalImage && <ImageModal image={modalImage} closeModal={closeModal} />}
        </div>
    );
}

export default App;
