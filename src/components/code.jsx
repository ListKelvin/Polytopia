// import theme from 'prism-react-renderer/themes/nightOwlLight'
"use client";
import { Highlight, themes } from "prism-react-renderer";

const Code = ({ children }) => {
  console.log(children);

  return (
    <Highlight theme={themes.dracula} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} whitespace-pre-wrap col-span-3 p-16 overflow-auto bg-white h-full`}
          style={{
            ...style,
            fontSize: 12,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
