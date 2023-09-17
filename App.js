import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {
        id: "parent"
    },
    [React.createElement("div", {
                id: "child"
            },
            [React.createElement("h1", {
                        id: "h1"
                    },
                    "I'm an h1 tag"),
                React.createElement("h2", {
                        id: "h2"
                    },
                    "I'm an h2 tag")
            ]),
        React.createElement("div", {
                id: "child2"
            },
            [React.createElement("h1", {
                        id: "h1_2"
                    },
                    "I'm an h1 tag"),
                React.createElement("h2", {
                        id: "h2_2"
                    },
                    "I'm an h2 tag")
            ])
    ]);

const jsxHeading = < h1 id = "heading" > Hello World using JSX!!! < /h1>
console.log(jsxHeading);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);