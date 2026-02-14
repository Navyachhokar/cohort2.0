import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown';
// import notes from "../../public/notes.txt";
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss";

const Note = () => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])

  return (
     <MacWindow>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='typescript' style={a11yDark}>{markdown}</SyntaxHighlighter>:<p>Loading...</p>}
        </div>
     </MacWindow>
  )
}

export default Note
