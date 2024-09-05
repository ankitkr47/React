// const heading = React.createElement('h1', {id: "heading"}, "Hello, World!");
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

// root.render(heading);

////////////////////////////////////////////////////////////

// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>


const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child' }, [
            React.createElement('h1', { id: 'heading1' }, 'Hello, World! from h1'),
            React.createElement('h2', { id: 'heading2' }, 'Hello, World! from h2')
        ]),
        React.createElement('div', { id: 'child2' }, [
            React.createElement('h1', { id: 'heading3' }, 'Hello, World! from h1'),
            React.createElement('h2', { id: 'heading4' }, 'Hello, World! from h2')
        ])
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

root.render(parent);

///////////////////////////////////////////////////////



