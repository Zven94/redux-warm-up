import ObjectItem from "./ObjectItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const ObjectContainer = () => {

  const { objectItem, total, amount } = useSelector((store) => store.object)

  if (amount > 1 ) {
    return (
      <h3>Complex figure</h3>
    )
  }
    return (
      <h3>Container</h3>
    )
}