import './App.css';
import MainHeader from './Components/MainHeader';
import FirstPage from './Components/FirstPage';
import Footer from './Components/Footer';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';
import { Switch, Route, Redirect } from 'react-router';
import { ContextProvider } from './Context/main-context';


function App() {
  // localStorage.removeItem("BookDetails");
  // localStorage.removeItem("StudentLogin");
  // localStorage.removeItem("StudentLoginInfo");
  // localStorage.removeItem("CurrentUser");
  // localStorage.removeItem("profile")
  return (
    <ContextProvider>
    <div className='appstyles'>
      <MainHeader/>
       <Switch>
        <Route path='/' exact>
          <Redirect to='/firstpage'></Redirect>
        </Route>
        <Route path='/librarysystem' exact>
            <Redirect to='/firstpage'></Redirect>
        </Route>
        <Route path='/firstpage' exact>
          <FirstPage/>
        </Route>
        <Route path='/firstpage/admin' exact>
          <AdminLogin/>
        </Route>
        <Route path='/firstpage/student' exact>
          <StudentLogin/>
        </Route>
        <Route path='/adminpage'>
        <SecondPage/>
        </Route>
        <Route path='/studentpage'>
          <ThirdPage/>
        </Route>
      </Switch>
      {/* <Footer/> */}
    </div>
    </ContextProvider>
      
  );
}

export default App;
