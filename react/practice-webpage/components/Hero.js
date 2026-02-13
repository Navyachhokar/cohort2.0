import SideBar from "./Sidebar.js";

function Hero() {
    return React.createElement("section", { className: "hero" },
        React.createElement(SideBar),
        React.createElement("div", { className: "hero-content" },
            React.createElement("div", { className: "stats" },
                React.createElement("div",{className:"stat-item-left"},
                    React.createElement("h2",null,"+200"),
                    React.createElement("p",null,"Projects completed")
                ),
                React.createElement("div",{className:"stat-item-right"},
                    React.createElement("h2",null,"+50"),
                    React.createElement("p",null,"Startup raised")
                ),
            ),
            React.createElement("div", {className: "hero-text"},
                React.createElement("h1", { className: "main-title" }, "Hello"), 
                React.createElement("p", { className: "subtitle" }, "— It's D.Nova a design  wizard"),
            ), 
            React.createElement("div", {className:"scroll"},
                React.createElement("p",null,"Scroll down"),
                React.createElement("div",{className:"ri-arrow-down-line"}),
            ),
            
        ),
        React.createElement("img", { 
            src: "./image/heroimg.png", 
            className: "hero-portrait", 
            alt: "Designer Portrait" 
        })
    );
}
export default Hero;   