import ethIcon from '../assets/icon-ethereum.svg';
import clockIcon from '../assets/icon-clock.svg';

const NFTInfo = () => {
    return (
        <section>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div>
                <div>
                    <img src={ethIcon} alt="ethereum"/>
                    <p>0.041 ETH</p>
                </div>
                <div>
                    <img src={clockIcon} alt="clock"/>
                    <p>3 days left</p>
                </div>
            </div>
        </section>
    );
}

export default NFTInfo;