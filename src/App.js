// import logo from './logo.svg';
import './App.css';
import Nav from './components/Cau1/Cau1.jsx';
import SignUp from './components/Cau2/Cau2.jsx'
import EmployeeTable from './components/Cau3/EmployeeTable.js';


function App() {
  return (
    <div>
      {/* <header>
        <Nav />
      </header>
      <body className='SignUp'>
        <SignUp />
      </body> */} 
      <EmployeeTable />
    </div>
  );
}

export default App;
