
{/* <div id="root">
    <div id="parent">
        <div id="child">
            <h1>i am an h1 tag</h1>
        </div>
    </div>
</div>

React.createElement ===> is nothING but an object;
 */}




const parent = React.createElement("div",
    { id: "parent" },

    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ])
);


console.log(parent);

// const heading = React.createElement("h1", {}, "hello react world");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);