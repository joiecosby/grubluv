import AppHome from './home/AppHome';
import Todo from './core/Todo';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function Index() {
//   return <h2>Home</h2>;
// }

// function Product({ match }) {
//  return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }

const App = () => {
  return (
    <div>
      <AppHome />
    </div>
  );

//https://levelup.gitconnected.com/lets-setup-a-react-typescript-project-with-material-ui-react-router-3d7ea8cb5596
/**
 * Instead of tabs, use NavBar. (look at HeaderNavBar in jetstream)
 * Then create home page 
 * create user sign up
 * 
 */
  
};

export default App;

 
