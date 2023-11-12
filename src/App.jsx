import { useContext } from "react";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import GadjetsContext from "./context/gadjets-context";
import Orders from "./components/Orders/Orders";


export const App = () => {
  const ctx = useContext(GadjetsContext)
  return (
    <div>
      <Navbar />
      {ctx.orderSection && <Orders />}
      {!ctx.orderSection && <Hero />}
      {!ctx.orderSection && <Products />}
    </div>
  )
}
