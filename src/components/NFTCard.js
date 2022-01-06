import NFTImage from "./NFTImage";
import NFTInfo from "./NFTInfo";
import NFTCreator from "./NFTCreator";

const NFTCard = () => {
    return (
        <section>
            <NFTImage />
            <NFTInfo />
            <NFTCreator />
        </section>
    );
}

export default NFTCard;