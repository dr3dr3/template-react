import './App.css';
import LatestChange from './latestChange.js';
import ShowDeployHost from './showDeployHost.js';

function App() {
  return (
    <div className="App">
      <div className="intro">Hello, I'm André</div>
      <div className="tagline">Sharing <a href="http://localhost/revealmd/index.html">stories</a> about DevOps and Product Management</div>
      <div className="icons-social">
        <a href="https://github.com/dr3dr3">
                  <i className="fab fa-github" aria-hidden="true" title="Github"></i>
                  <span className="sr-only">Github</span>
              </a>
              <a href="https://linkedin.com/in/andredreyer">
                  <i className="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                  <span className="sr-only">LinkedIn</span>
              </a>
          </div>
      <div className="build">BUILD-PLACEHOLDER</div>
      <LatestChange />
      <ShowDeployHost />
    </div>
  );
}

export default App;
