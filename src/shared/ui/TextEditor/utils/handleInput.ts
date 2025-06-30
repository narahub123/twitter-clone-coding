import { extractLines } from "./extractUtils";

const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
  const textEditor = e.currentTarget;

  console.log(textEditor);

  const lines = extractLines(textEditor);

  console.log(lines);
};

export default handleInput;
