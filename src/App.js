import { useState, useEffect } from 'react';
import './App.css';

function App({ seed }) {
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://picsum.photos/seed/${seed}/200/300`)
      .then((response) => {
        if (response.status !== 200) return setError('Invalid Response');
        setLoading(false);
        setImgUrl(response.url);
      })
      .catch((err) => setError(err));
  }, [seed]);

  const getContent = () => {
    if (error) return <h2>{error}</h2>;
    if (!loading) return <img src={imgUrl} alt="Random" />;
    return 'Loading...';
  };

  return (
    <div className="App">
      <header className="App-header">
        Seed: {seed}
        <p>{getContent()}</p>
      </header>
    </div>
  );
}

export default App;
