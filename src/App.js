import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import { useState } from 'react';
import ReactFCCtest from 'react-fcctest';




function App() {
  const [text, setText] = useState("");
  return (
    <div className="page-wrapper">
      <ReactFCCtest />
      <Editor text={text} setText={setText}/>
      <Previewer text={text} setText={setText} />
    </div>
  );
}

export default App;
