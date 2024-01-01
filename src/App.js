
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Watch from './Pages/Watch';
import WatchCategory from './Pages/WatchCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import NewCollection from './Components/Newcollections/Newcollections';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Login from './Pages/Login'
import AddItems from './Pages/AddItems';
import Summary from './Pages/Summary';
import ManageProducts from './Pages/ManageProducts';
import ManageOrder from './Pages/ManageOrder';



function App() {
  return (
    <div >
      <BrowserRouter>

        <Navbar />

          <Routes>

          <Route path='/' element={<Watch />} />
          <Route path='/mens' element={<WatchCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<WatchCategory banner={women_banner}  category="womens" />} />
          <Route path='/kids' element={<WatchCategory banner={kids_banner}  category="kids" />} />
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<Loginsignup/>}/>
          <Route path='/newcollection' element={<NewCollection/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Summary/>}/>
          <Route path='/additems' element={<AddItems/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/manageproduct' element={<ManageProducts/>}/>
          <Route path='/manageorder' element={<ManageOrder/>}/>

          </Routes>

        <Footer/>
        
      </BrowserRouter>
         
    </div>
  );
}

export default App;
