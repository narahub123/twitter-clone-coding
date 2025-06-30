import { extractLines } from "./extractUtils";

const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
  const textEditor = e.currentTarget;

  console.log(textEditor);

  const lines = extractLines(textEditor);

  console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
  }
};

export default handleInput;
