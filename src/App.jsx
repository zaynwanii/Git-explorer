import {Route, Routes, Navigate, useLocation  } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import { useState ,lazy,Suspense } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';


const Users=lazy(()=>import('./components/Users'));
const About=lazy(()=>import('./components/About'));
const NotFound=lazy(()=>import('./components/NotFound'));
const UserProfile=lazy(()=>import('./components/UserProfile'));
const SearchUser=lazy(()=>import('./components/SearchUser'));
const Login=lazy(()=>import('./components/Login'));
const AuthProfile=lazy(()=>import('./components/AuthProfile'));


function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  let location = useLocation();

  return (

    <SwitchTransition >
      <CSSTransition key={location.pathname}
        classNames="fade"
        timeout={2000}
        unmountOnExit
      >
       <Suspense fallback={<h1>Loading...</h1>}>
       <Routes >
            
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/user/:username' element={<UserProfile />} />
            <Route path='/search' element={<SearchUser />} />
            <Route path='/login' element={<Login
              setUsername={setUsername}
              setIsLogged={setIsLogged} />}

            />
            <Route path='/authProfile'
              element={isLogged ? <AuthProfile username={username} />
                : <Navigate replace="true" to="/login" />
              }

            />
        
          <Route path='*' element={<NotFound />} />
        </Routes>
       </Suspense>
         


       </CSSTransition>
     </SwitchTransition>




  )
}

export default App
