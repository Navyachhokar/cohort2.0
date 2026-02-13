function navbar(){
    return (React.createElement("nav",null,
        React.createElement("div",{className:"nav-left-links"},
            React.createElement("img",{src:"./image/logo.png", alt:"logo"}),
            React.createElement("a", {href:"#"},"About me"),
            React.createElement("a", {href:"#"},"Portfolio"),
            React.createElement("a", {href:"#"},"Services"),
            React.createElement("a", {href:"#"},"Blog"),
        ),
        React.createElement("div",{className:"nav-right-links"},
            React.createElement("a", {href:"#"},"Book a call"),
            React.createElement("i",{className:"ri-arrow-right-up-line"}),
        ),
    ))
}

export default navbar;