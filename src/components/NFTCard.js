import NFTImage from "./NFTImage";
import NFTInfo from "./NFTInfo";
import NFTCreator from "./NFTCreator";
import '../index.css';

const NFTCard = () => {
    return (
        <section className="card">
            <NFTImage />
            <NFTInfo />
            <NFTCreator />
        </section>
    );
}

export default NFTCard;