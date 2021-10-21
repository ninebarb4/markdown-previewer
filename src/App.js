import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import { useState } from 'react';
import ReactFCCtest from 'react-fcctest';

const initialState = `
# Welcome to my markdown previewer
## Enter your markdown in the top window and see it converted underneath!

Have a look at the markdown [cheatsheet](https://www.markdownguide.org/cheat-sheet/) if you forget what's what!

Here's some inline code, \`const num = 7 \` ...handy eh?

\`\`\`
//This is fenced code block: 

function greet(str) {
  return "Hello" + str;
}
\`\`\`

wow look! Some **bold text!** ... and again... **boom**

Here is a list:
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

> This is a blockquote

Finally an image:

![white pencil](https://i.postimg.cc/j5HG5yWC/white-pencil-unsplash.jpg)
`;


function App() {
  const [text, setText] = useState(initialState);
  return (
    <div className="page-wrapper">
      <ReactFCCtest />
      <Editor text={text} setText={setText}/>
      <Previewer text={text} setText={setText} />
    </div>
  );
}

export default App;
