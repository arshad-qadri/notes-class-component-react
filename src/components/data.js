let data = [
  {
    id: 1,
    question: "What is Reactjs ?",
    answer:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    toggler: false,
  },
  {
    id: 2,
    question: "What is component ?",
    answer:
      "A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. ... Components in React basically return a piece of JSX code that tells what should be rendered on the screen.",
    toggler: false,
  },
  {
    id: 3,
    question: "What is class component ?",
    answer:
      "A class component is a JavaScript class that extends React. Component which has a render method. ... On the other hand, when defining a class component, you have to make a class that extends React. Component . The JSX to render will be returned inside the render method.",
    toggler: false,
  },
  {
    id: 4,
    question: "What is functional component ?",
    answer:
      "Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI",
    toggler: false,
  },
  {
    id: 5,
    question: "What is JSX ?",
    answer:
      "JSX stands for JavaScript XML.It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.",
    toggler: false,
  },
  {
    id: 6,
    question: "What is Props ?",
    answer:
      "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.",
    toggler: false,
  },
  {
    id: 7,
    question: "What is a state in React and how is it used ?",
    answer:
      "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().",
    toggler: false,
  },
  {
    id: 8,
    question: "What is arrow function in React? How is it used ?",
    answer:
      "Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.",
    toggler: false,
  },
  {
    id: 9,
    question: "Explain the lifecycle methods of React components in detail.",
    answer:
      "Some of the most important lifecycle methods are : i. componentWillMount() – Executed just before rendering takes place both on the client as well as server-side. ii. componentDidMount() – Executed on the client side only after the first render. iii. componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called. iv.shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false. v. componentWillUpdate() – Called just before rendering takes place in the DOM. vi. componentDidUpdate() – Called immediately after rendering takes place. vii. componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.",
    toggler: false,
  },
  {
    id: 10,
    question: "What is Redux ?",
    answer:
      "Redux is one of the most trending libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.",
    toggler: false,
  },
  {
    id: 11,
    question: "What is React Router ?",
    answer:
      "React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.",
    toggler: false,
  },
  {
    id: 12,
    question: "Why do we need a Router in React ?",
    answer:
      "A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route. So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view.",
    toggler: false,
  },
];

export default data;
