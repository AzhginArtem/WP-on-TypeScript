import profileImage from './../assets/profile.png';
import heartImage from './../assets/heart.png';

export default function Lobby() {
    return(
        <main className="player">
            <div className="player__block">
                <img src={profileImage} className="player__image" alt='Account'/>
                <div className="player__lives">
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                </div>
            </div>
            <div className="player__block">
                <img src={profileImage} className="player__image" alt='Account'/>
                <div className="player__lives">
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                </div>
            </div>
            <div className="player__block">
                <img src={profileImage} className="player__image" alt='Account'/>
                <div className="player__lives">
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                </div>
            </div>
            <div className="player__block">
                <img src={profileImage} className="player__image" alt='Account'/>
                <div className="player__lives">
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                    <img src={heartImage} alt="Live" className="player__live" />
                </div>
            </div>
        </main>
    )
}