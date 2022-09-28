
import './App.css';
import CommentsLists from './features/comments/CommentsLists';
import { Routes, Route} from "react-router-dom";
import AddComments from './features/comments/AddComments';

import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RequireAuth from './components/RequireAuth';
import Footer from './components/Footer';
function App() {
  return (
   <>
<Navbar/>
   <Routes>
    
        <Route path="/" element={  <CommentsLists/>} />
       <Route path='/add-comments' element={<RequireAuth><AddComments/></RequireAuth>}  />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
