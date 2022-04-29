import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import AuthProvider from './Context/AuthProvider/AuthProvider';
import Notfound from './Pages/Notfound/Notfound';
import Home from './Pages/Home/Home';
import AllFaculties from './Pages/AllFaculties/AllFaculties';
import PlaceAdmit from './Pages/PlaceAdmit/PlaceAdmit';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
// import OrderUpdate from './Pages/Dashboard/OrderUpdata/OrderUpdate';
// import MyOrder from './Pages/MyOrder/MyOrder';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* <PrivateRoute path="/dashboard/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/orders/update/:id">
              <OrderUpdate></OrderUpdate>
            </PrivateRoute> */}
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeadmit/:id">
              <PlaceAdmit></PlaceAdmit>
            </PrivateRoute>
            <PrivateRoute path="/allfaculties">
              <AllFaculties></AllFaculties>
            </PrivateRoute>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
