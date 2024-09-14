import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading by core react"
);
console.log(heading);

const jsxHeading = (
  <h1 id="heading" className="head">
    Heading using jsx
  </h1>
);
console.log(jsxHeading);

const Title = () => (
    <h1>Welcome to namaste react from react component</h1>
)

const title = <h1 id="heading">Welcome to namaste react from react element</h1>

const str = "Hello, World!";

const HeadingComponent = () => (
    <div id="container">
        <Title />       {/* using react component inside react component (component composition)*/}
        <Title></Title>  {/* using react component inside react component (component composition)*/}
        {Title()}       {/* using react component inside react component (component composition)*/}

        <h2>{str}</h2>  {/* using Js inside react component */}

        {title}         {/* using react element inside react component */}

        <h1 id="heading">Introduction to functional component</h1> {/*using jsx inside component composition*/}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

root.render(<HeadingComponent/>);   // root.render(HeadingComponent());


