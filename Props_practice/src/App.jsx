import "./App.css";
import Joke from "./components/Jokes";
import jokesData from "./model/jokesData";

export default function App() {
  const jokes = jokesData.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));

  return (<p>{jokes}</p>);
}
