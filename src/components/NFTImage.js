import nftImage from '../assets/image-equilibrium.jpg';
import viewIcon from '../assets/icon-view.svg';

const NFTImage = () => {
    return (
        <div className="card-img-container">
            <img className="card-img" src={nftImage} alt="NFT-Equilibrium"/>
            <a className="card-link-overlay" href={{}}>
                <img className="card-link-img" src={viewIcon} alt="view"/>
            </a>
        </div>
    );
}

export default NFTImage;