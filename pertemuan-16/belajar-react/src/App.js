import Header from "./components/Header";
// import Counter from './components/Counter';
import './App.css';

// Function compnent
function App() {
  return (
    <>
        <div style={{paddingLeft: "20px"}}>
          <Header char="Alpha" age={20} />
          {/* <Header char="Beta" />
          <Header char="Charlie" /> */}

          {/* <Counter /> */}
        </div> 
    </>
  );
}

export default App;
