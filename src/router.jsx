import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import ProteinCalculator from "./pages/protein-calculator";
import ProteinTracker from "./pages/protein-tracker";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/calculator",
    element: <ProteinCalculator />,
  },
  {
    path: "/tracker",
    element: <ProteinTracker />,
  },
]);

export default router;
