import "./App.css";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <div className="App">
            <HomePage />
        </div>
        // <Router basename={"/"}>
        //     <ScrolToTop>
        //         <Switch>
        //             <Rout exact path="/" component={HomePage} />
        //         </Switch>
        //     </ScrolToTop>
        // </Router>
    );
}

export default App;
