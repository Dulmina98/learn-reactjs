import './App.css';
import Greet from "./Components/Greet";

function App() {
    return (
        <div className="App">
            <Greet name="Bruce" heroName="Bat Man">
                <a href="">This is children prop</a>
            </Greet>
            <Greet name="Peter" heroName={"Spider Man"}>
                <button>Action</button>
            </Greet>
            <Greet name="Stark" heroName={"Iron Man"}/>
        </div>
    );
}

export default App;
