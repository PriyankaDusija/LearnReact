/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

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

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);