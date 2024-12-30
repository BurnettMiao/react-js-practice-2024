import profilePic from './assets/pic.jpg';

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" />
      <h2>Bro Code</h2>
      <p>I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card;
