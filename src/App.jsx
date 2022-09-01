import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const App = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  return (
    <div className="container">
      <h1>
        Text to <span>Speech</span>
      </h1>
      <input
        type="text"
        value={text}
        placeholder="Type here..."
        onChange={(event) => setText(event.target.value)}
      />
      <button type="button" onClick={() => speak({ text: text })}>
        Speak
      </button>
    </div>
  );
};

export default App;
