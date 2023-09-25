import  {Routes, Route, Outlet } from 'react-router-dom';
import Home from "../routes/home";
import Login from"../routes/login";


export function RouteList() {
  return ( 
  <Routes>
    <Route path="/" element={<Outlet />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    </Route>
  </Routes>


  );
}