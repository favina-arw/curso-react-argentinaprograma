import AllProducts from "../pages/AllProducts";
import SingleProduct from "../pages/SingleProduct";
import AllUserCarts from "../pages/AllUserCarts";
import { useRoutes } from "react-router-dom";

export default function Router() {
  let element = useRoutes([
    {
      path: "products",
      element: <AllProducts />,
    },
    {
      path: ":id",
      element: <SingleProduct />,
    },
    {
      path: "carts",
      element: <AllUserCarts />,
    },
    {
      path: "*",
      element: <AllProducts />,
    },
  ]);
  return element;
}
