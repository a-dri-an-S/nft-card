import ethIcon from '../assets/icon-ethereum.svg';
import clockIcon from '../assets/icon-clock.svg';

const NFTInfo = () => {
    return (
        <section className="card-info">
            <a className="card-title" href={{}}><h1>Equilibrium #3429</h1></a>
            <p className="card-info-primary">Our Equilibrium collection promotes balance and calm.</p>
            <div className="card-info-secondary">
                <div className="card-price">
                    <img 
                        className="card-price-img"
                        src={ethIcon} 
                        alt="ethereum"
                    />
                    <p className="card-price-txt">0.041 ETH</p>
                </div>
                <div className="card-time">
                    <img 
                        className="card-time-img"
                        src={clockIcon} 
                        alt="clock"
                    />
                    <p className="card-time-txt">3 days left</p>
                </div>
            </div>
        </section>
    );
}

export default NFTInfo;