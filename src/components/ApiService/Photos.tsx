import axios from 'axios';

const API_KEY = 'qednC7qUNkuOAabk2weS9qzTaKYhzF8wLyxh1crJ3zE';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 15,
};

type Photo = {
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

type GetPhotosResponse = {
  results: Photo[];
  total: number;
  total_pages: number;
};

export const getPhotos = async (query: string, page: number = 1): Promise<GetPhotosResponse> => {
    try {
        const { data } = await axios.get<GetPhotosResponse>('search/photos', {
            params: {
                query,
                page,
            },
        });

        return data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};