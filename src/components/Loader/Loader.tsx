import { RotatingTriangles } from 'react-loader-spinner';

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                colors={['#4fa94d']} 
                ariaLabel="rotating-triangles-loading"
            />
        </div>
    );
};

export default Loader;