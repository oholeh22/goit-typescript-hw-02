export type Photo = {
    id: string;
    urls: {
      regular: string;
      full: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
  };
  
  export type GetPhotosResponse = {
    results: Photo[];
    total: number;
    total_pages: number;
  };
  
  export type SearchBarProps = {
    setQuery: (query: string) => void;
  };

  export type ImageGalleryProps = {
    images: Photo[];
    openModal: (image: Photo) => void;
  };
  
  export type ImageModalProps = {
    image: Photo;
    closeModal: () => void;
  };

  export type LoadMoreBtnProps = {
    loadMore: () => void;
    hasImages: boolean;
  };
  