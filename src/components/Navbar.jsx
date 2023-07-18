import { useSelector } from "react-redux/es/hooks/useSelector";
import { Icon } from "../icon";

const Navbar = () => {
 
  const amount = useSelector((store) => store.object.amount)
 
  return (
    <nav>
      <div>
        <h3> Redux Toolkit Lololo</h3>
        <h3 amount={amount}> Cantidad de Objetos: {amount}</h3>
        <Icon />
      </div>
    </nav>
  )
}

export default Navbar;