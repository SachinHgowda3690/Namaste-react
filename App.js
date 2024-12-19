const parent=React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child2"},
        [React.createElement('h1',{id:"1"},"I am h1 tag"),
            React.createElement("h2",{id:"2"},"I am h2 tag")]
    ),React.createElement('div',{id:"child2"},
        [React.createElement('h1',{id:"1"},"I am h1 tag of child 2"),
            React.createElement("h2",{id:"2"},"I am h2 tag of child 2")]
    )]);

 


      console.log(parent);

           const root=ReactDOM.createRoot(document.getElementById("root"));

           root.render(parent);