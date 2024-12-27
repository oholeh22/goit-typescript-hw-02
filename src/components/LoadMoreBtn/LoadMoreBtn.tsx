import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
    loadMore: () => void;
    hasImages: boolean;
};

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