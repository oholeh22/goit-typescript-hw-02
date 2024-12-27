import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../App/App.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore, hasImages }) => {
    return (
        hasImages && (
            <button onClick={loadMore} className={css.loadMoreBtn}>
                Load more
            </button>
        )
    );
};

export default LoadMoreBtn;