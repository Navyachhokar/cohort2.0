import navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";

function App() {
    return React.createElement("div", { className: "container" },
        React.createElement(navbar),
        React.createElement(Hero)
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));