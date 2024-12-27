export type Image = {
    id: string;
    urls: {
        regular: string;
        full: string;
    };
    alt_description: string | null; 
    user: {
        name: string;
    };
    likes: number;
};

export type GetPhotosResponse = {
    results: Image[];
    total: number;
    total_pages: number;
};

export type SearchBarProps = {
    setQuery: (query: string) => void;
};

export type ImageGalleryProps = {
    images: Image[];
    openModal: (image: Omit<Image, 'id'>) => void;
};

export type ImageModalProps = {
    image: Image;
    closeModal: () => void;
};

export type LoadMoreBtnProps = {
    loadMore: () => void;
    hasImages: boolean;
};
