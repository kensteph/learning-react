// My render function
const render = (reactElement, containerDOMElement) => {
  // 1- Create the element
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  // 2- Add the properties
  const attributes = reactElement.props;
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  // Add the element to the DOM
  containerDOMElement.appendChild(element);
};

// Create a react element
const reactElement = {
  type: 'a', // The type of the element (a,p,div)
  props: { href: 'https://github.com/kensteph', id: 'link' }, // Any attribute
  children: 'My github link', // Could be also another reactElement
};

// Get the containerDOMElement
const containerDOMElement = document.querySelector('#root');

// Render the element
render(reactElement, containerDOMElement);
