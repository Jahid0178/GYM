import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/Shared/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import TopHeader from "./components/TopHeader/TopHeader";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Shared/Footer/Footer";
import Shop from "./components/Shop/Shop";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";
import Trainer from "./components/Trainer/Trainer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/trainer">
              <Trainer></Trainer>
            </Route>
            <PrivateRoute path="/product/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
