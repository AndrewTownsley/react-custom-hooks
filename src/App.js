import './App.css';
import useFetch from './utils/useFetch';

function App() {
const { loading, error, data = [] } = useFetch('https://hn.algolia.com/api/v1/search?query=react');

if (error) return (<p>Error!</p>);
if (loading) return (<p>Loading...</p>) 

  return (
    <div className="App">
      <h1>Custom Hooks...</h1>
      <ul>
        {
          data?.hits?.map(item => (
            <li key={item.objectId}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
