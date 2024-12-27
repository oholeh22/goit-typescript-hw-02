import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import css from './Modal.module.css';

type Image = {
  alt_description: string;
  urls: {
    full: string;
  };
  user: {
    name: string;
  };
  likes: number;
};

type ImageModalProps = {
  image: Image;
  closeModal: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ image, closeModal }) => {
  const { alt_description, urls, user, likes } = image;

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <FaTimes />
      </button>
      <img src={urls.full} alt={alt_description} className={css.modalImage} />
      <div className={css.imageInfo}>
        <h2>{alt_description}</h2>
        <p>By: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
