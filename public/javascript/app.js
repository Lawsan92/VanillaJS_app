const body = document.body;
body.innerHTML = `
<h1>Vanilla JS</h1>
<a href="/contact.js">Contact</a>
`;

class Container {
  constructor () {
    this.element = document.createElement('div');
    this.element.className = 'container';
    this.DOM = body.appendChild(this.element);
  }
}

class Button {
  constructor (type) {
    this.element = document.createElement('button');
    this.className = `btn_${type}`
    this.element.innerText = type;
    this.DOM = container.appendChild(this.element);
    this.log = () => {
      console.log('DOM TREE')
    }
  }
};

class Input {
  constructor(type) {
    this.element = document.createElement('input');
    this.element.className = 'input_'+type;
    this.DOM = container.appendChild(this.element);
  }
}

const container = new Container();
const addButton = new Button('add');
const deleteButton = new Button('delete');
const addInput = new Input('add');
const deleteInput = new Input('delete');
