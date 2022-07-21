import logo from './logo.svg';
import './App.css';
import React from 'react';
import form from './Registration/form';
import userEvent from '@testing-library/user-event';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       users: null
//     }
//   }
//   componentDidMount() {
//     fetch("https://reqres.in/api/users?page=2").then((resp) => {
//       resp.json().then((result) => {
//         this.setState({users:result.data})
//       })
//     })
//   }
//   render() {
//     return (
//       <div className="App">
// //         <h1>Hello World</h1>
//         {
//           this.state.users ?
//           this.state.users.map((item,i)=> 
//           <div><p>{i}-- {item.first_name} {item.last_name} {item.email}</p></div>
//           )
//           :
//           null
//         }
//       </div>
//     );
//   }
// }
function App() {
  function App() {
    return (
      <div className="App">
        <form />
      </div>
    );
   }
  
 }

export default App;
