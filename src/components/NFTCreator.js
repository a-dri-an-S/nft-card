import avatar from '../assets/image-avatar.png'

const NFTCreator = () => {
    return (
        <div className="card-creator">
            <img 
                className="card-creator-img"
                src={avatar} 
                alt="avatar"/>
            <p className="creator-name">
                Creation of <a className="creator-link" href={{}}>Jules Wyvern</a>
            </p>
        </div>
    );
}

export default NFTCreator;