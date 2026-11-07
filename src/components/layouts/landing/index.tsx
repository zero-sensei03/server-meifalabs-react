import { Outlet } from "react-router";
import { Navbar } from "./navbar";

const LayoutLanding = () => {
  return (
    <main>
      <Navbar />
      <div className="py-16">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutLanding;
