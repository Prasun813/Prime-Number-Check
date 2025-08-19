var h1 = React.createElement('h1', null, 'Hello from React')

let page = document.querySelector('#root')


let root =  ReactDOM.createRoot(page);
root.render(h1)