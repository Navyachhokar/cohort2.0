import React from "react";
import MacWindow from "./MacWindow";
import Typewriter from "./Typewriter.jsx";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName, setWindowsState, activeWindow, setActiveWindow}) => {
  const welcomeMessage = (
    <div style={{ lineHeight: 1.3 }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#79d2b2" }}>
        🎉 Welcome to My Interactive Portfolio Terminal!
      </div>
      <div style={{ marginTop: 8, color: "#cfcfcf" }}>
        Type <b>help</b> or <b>ls</b> to see available commands. Tip: try{" "}
        <b>about</b>.
      </div>
    </div>
    );

  const commands = {
    myhelp: {
      description: "Display all available commands.",
      usage: "help",
      fn: () => <div style={{ color: "#d7e6f0" }}>
        <div style={{ fontWeight: 700, color: "#79d2b2" }}>Available commands</div>
        <pre style={{ color: "#cfcfcf", background: "transparent" }}>
{`about    projects   skills   contact   resume   github
whoami   pwd        date     echo      help     ls`}
        </pre>
        <div style={{ marginTop: 8, color: "#9fb7c9" }}>
          Tip: run <b>resume</b> to open your resume in the Notes window.
        </div>
      </div>,
    },
    ls: {
  description: "Alias for help. Works same.",
  usage: "ls",
  fn: () => (
    <div style={{ color: "#cfcfcf", lineHeight: "1.6" }}>
      <div style={{ color: "#79d2b2", fontWeight: 700 }}>
        Available Commands:
      </div>

      <div style={{ color: "#6a9bd8" }}>
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </div>

      <div>
        <span style={{ color: "#f5d76e" }}>about</span> — Learn about me
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>projects</span> — View my projects
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>skills</span> — See my technical skills
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>contact</span> — Get contact information
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>resume</span> — View my resume
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>github</span> — Open my GitHub profile
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>linkedin</span> — Open my LinkedIn profile
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>whoami</span> — Display current user
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>pwd</span> — Print working directory
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>date</span> — Show current date and time
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>echo &lt;text&gt;</span> — Echo a passed string
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>clear</span> — Clear the terminal
      </div>
      <div>
        <span style={{ color: "#f5d76e" }}>help / ls</span> — List all commands
      </div>

      <div style={{ color: "#6a9bd8" }}>
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </div>
    </div>
  ),
},


    about: {
      description: "Learn about me.",
      usage: "about",
      fn: () => <div>
        <div style={{ fontSize: 16, color: "#ffd580", fontWeight: 700 }}>
          Hi — I'm Navya!!!
        </div>
        <div style={{ color: "#cfcfcf", marginTop: 6 }}>
            <i>I speacialize in these skills: </i>
          <div style={{color:"#eaf990"}}>Frontend • React • CSS • Vite</div>
        </div>
        <div style={{ marginTop: 10, display: "flex", gap:"10px"}}>
          <button
            onClick={() => setWindowsState?.(s => ({ ...s, resume: true }))}
            style={{
              background: "#d2a079",
              color: "#04121a",
              border: "none",
              padding: "6px 10px",
              borderRadius: 6,
              cursor: "pointer",
              
            }}
          >
            Open Resume
          </button>
          <button onClick={() => setWindowsState?.(s => ({...s, note:true}))} style={{background:"#d2a079", color:"#04121a", border: "none", padding: "6px 10px", borderRadius: 6, cursor: "pointer", zIndex: 51,}}>Open Note</button>
          <a
            href="mailto:chhokarnavya@gmail.com"
            style={{ marginLeft: 12, color: "#9fb7c9", textDecoration: "underline" }}
          >
            Email me
          </a>
        </div>
      </div>
    },
    projects: {
  description: "View my projects.",
  usage: "projects",
  fn: () => (
    <div style={{ color: "#cfcfcf", lineHeight: 1.4 }}>

      <Typewriter
        text={`(\\_/)
( •_•)
/>🥕▋`}
        speed={35}
        style={{
          color: "#79d2b2",
          fontFamily: "monospace",
          whiteSpace: "pre",
          margin: 0,
        }}
      />

      <div style={{ fontWeight: 700, color: "#ffd580", marginTop: 6 }}>
        Have a look at my projects :)
      </div>

      <div style={{ marginTop: 6 }}>
        Mac OS Portfolio — React + Vite<br />
        E-commerce Platform — React + Node<br />
        Productivity Dashboard — React + Firebase
      </div>

      <div style={{ marginTop: 6, color: "#79d2b2" }}>
        Type <b>github</b> → to open my GitHub
      </div>
    </div>
  ),
},




    skills: {
      description: "See my technical skills.",
      usage: "skills",
      fn: () => <div style={{ color: "#cfcfcf" }}>
                  <div style={{ fontWeight: 700, color: "#ffd580" }}>Skills</div>
                  <div style={{ marginTop: 6 }}>
                    <i class="ri-reactjs-line"></i> React · <i class="ri-javascript-fill"></i> JavaScript · SCSS · Accessibility · Performance
                  </div>
                </div>
    },
    contact: {
      description: "Get contact information.",
      usage: "contact",
      fn: () => <div style={{ color: "#b3f56c" }}>
                  <div>📧 chhokarnavya@gmail.com</div>
                  <div>🐙 github.com/NavyaChhokar</div>
                  <div>💼 linkedin.com/in/navya-chhokar </div>
                  <i style={{ color: "#b3f56c79" }}>Also you can click on link icon on the dock to directly open my <b>LinkedIn profile</b></i>
                </div>
    },
    resume: {
      description: "View my resume.",
      usage: "resume",
      fn: () => {
      setWindowsState?.(s => ({ ...s, note: true }));
      return <div style={{ color: "#9fb7c9" }}>Opening Notes / Resume window...</div>;
      },
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
      fn: () => "navya.developer",
    },
    pwd: {
      description: "Print working directory.",
      usage: "pwd",
      fn: () => "/home/developer/portfolio",
    },
    date: {
      description: "Show current date and time.",
      usage: "date",
      fn: () => <pre style={{ color: "#1bdcb6" }}>{new Date().toString()}</pre>,
    },
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    linkedin: {
        description: "opens my LinkedIn profile.",
        usage:"linkedin",
        fn: () => {
            window.open("https://www.linkedin.com/in/navya-2833432b9/", "_blank");
            return "Opening LinkedIn profile... 🚀";
        },
    }
  };

  return (
    <MacWindow windowName={windowName}  setWindowsState={setWindowsState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="navya:~$"
        />
        
      </div>
    </MacWindow>
  );
};

export default Cli;



