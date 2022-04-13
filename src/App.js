import Article from "./components/Article"
import TextInput from "./components/TextInput";
import Counter from "./components/counter";
import TuggleButton from "./components/TuggleButton";

function App() {
  return (
    <div>
      {/* <Article
        title = {"React入門1"}
        content = {"test2"}
      /> */}
      {/* <TextInput /> */}
      <Counter />
      <TuggleButton />
    </div>
  );
}

export default App;
