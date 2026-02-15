import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName, setWindowsState, activeWindow, setActiveWindow}) => {
  const welcomeMessage = `
╔═══════════════════════════════════════════════════════════════╗
║         Welcome to My Portfolio Terminal! 👋                  ║
║                                                               ║
║  Type 'help' or 'ls' to see available commands               ║
║  Type 'clear' to clear the terminal                          ║
╚═══════════════════════════════════════════════════════════════╝
`;

  const commands = {
    myhelp: {
      description: "Display all available commands.",
      usage: "help",
      fn: () => `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
about         - Learn about me
projects      - View my projects
skills        - See my technical skills
contact       - Get contact information
resume        - View my resume
github        - Open my GitHub profile
whoami        - Display current user
pwd           - Print working directory
date          - Show current date and time
echo <text>   - Echo a passed string
clear         - Clear the terminal
help / ls     - List all commands
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    },
    ls: {
      description: "List all available commands.",
      usage: "ls",
      fn: () => `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
about         - Learn about me
projects      - View my projects
skills        - See my technical skills
contact       - Get contact information
resume        - View my resume
github        - Open my GitHub profile
whoami        - Display current user
pwd           - Print working directory
date          - Show current date and time
echo <text>   - Echo a passed string
clear         - Clear the terminal
help / ls     - List all commands
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    },

    about: {
      description: "Learn about me.",
      usage: "about",
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                         About Me                              ║
╚═══════════════════════════════════════════════════════════════╝

👋 Hi! I'm a Full Stack Developer passionate about building
   beautiful and functional web applications.

🎓 I specialize in React, JavaScript, CSS, and modern web technologies.

💡 I love solving problems, learning new technologies, and creating
   user-friendly interfaces.

🌱 Always eager to collaborate and grow as a developer.
      `,
    },
    projects: {
      description: "View my projects.",
      usage: "projects",
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                      My Projects                              ║
╚═══════════════════════════════════════════════════════════════╝

📱 Mac OS Portfolio
   A stunning macOS-inspired portfolio website built with React
   and Vite. Features interactive windows and smooth animations.

🎯 Productivity Dashboard
   A beautiful dashboard for tracking tasks, notes, and
   time management built with React.

Type 'github' to view more projects on GitHub!
      `,
    },
    skills: {
      description: "See my technical skills.",
      usage: "skills",
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                      Technical Skills                         ║
╚═══════════════════════════════════════════════════════════════╝

Frontend:
  • React.js ⭐⭐⭐⭐⭐
  • JavaScript (ES6+) ⭐⭐⭐⭐⭐
  • CSS3 & SCSS ⭐⭐⭐⭐⭐
  • HTML5 ⭐⭐⭐⭐⭐
  • Vite ⭐⭐⭐⭐

Backend:
  • Node.js ⭐⭐⭐⭐
  • Express.js ⭐⭐⭐⭐

Tools & Technologies:
  • Git & GitHub ⭐⭐⭐⭐
  • Responsive Design ⭐⭐⭐⭐⭐
  • Web Accessibility ⭐⭐⭐⭐
  • VS Code ⭐⭐⭐⭐⭐
      `,
    },
    contact: {
      description: "Get contact information.",
      usage: "contact",
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    Contact Information                        ║
╚═══════════════════════════════════════════════════════════════╝

📧 Email: chhokarnavya@gmail.com
📱 Phone: +91 8595858384
🔗 GitHub: github.com/NavyaChhokar
💼 LinkedIn: linkedin.com/in/navya-
🌐 Website: yourportfolio.com

Feel free to reach out for opportunities and collaborations! 🚀
      `,
    },
    resume: {
      description: "View my resume.",
      usage: "resume",
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                   My Resume                                   ║
╚═══════════════════════════════════════════════════════════════╝

📄 View my full resume in the Notes window by clicking on it,
   or download it from my website.

Key highlights:
  • 3+ years of web development experience
  • Strong proficiency in React and modern JavaScript
  • Contributed to multiple successful projects
  • Passionate about clean code and best practices

Check the Notes window for the full resume document! 📋
      `,
    },
    github: {
      description: "Open my GitHub profile.",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Navyachhokar", "_blank");
        return "Opening GitHub profile... 🚀";
      },
    },
    whoami: {
      description: "Display current user.",
      usage: "whoami",
      fn: () => "developer",
    },
    pwd: {
      description: "Print working directory.",
      usage: "pwd",
      fn: () => "/home/developer/portfolio",
    },
    date: {
      description: "Show current date and time.",
      usage: "date",
      fn: () => new Date().toString(),
    },
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName}  setWindowsState={setWindowsState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="developer:~$"
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
