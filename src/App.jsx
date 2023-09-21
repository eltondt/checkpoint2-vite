
import { Outlet } from "react-router-dom";
import { useEffect, useState} from "react";
import Footer from "../src/components/Footer/footer";
import Navbar from "../src/components/Navbar/navbar";
import axios from "axios";

function App() { 

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
