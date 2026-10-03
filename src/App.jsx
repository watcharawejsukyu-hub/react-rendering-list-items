import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    
    <div className="App">
      <section className="movie-list-section">
        <h1 className="center">Movie List Section</h1>
        <div className="movie-list">
          {/* Render Movie Lists Here */
            movies.map((item, index) => (
              <div className="movie-card" key={index}>
                <img className="movie-image" src={item.image}/>

                <div className="movie-info">
                  <p><strong>Title:</strong> {item.title}</p>
                  <p><strong>Year:</strong> {item.year}</p>
                  <p><strong>Runtime:</strong> {item.runtime}</p>

                  <div className="movie-row">
                    <p><strong>Genres:</strong></p>
                    <div className="genres">
                      {item.genres.map((genre, index) => (
                        <span className="genre" key={index}>
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p><strong>IMDB Ratings:</strong> {item.imdbRating}</p>
                  <p><strong>IMDB Votes:</strong> {item.imdbVotes}</p>
                </div>

              </div>
            ))
          }
        </div>
      </section>
    </div>

  );
}

export default App;
