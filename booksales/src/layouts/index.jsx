import { Outlet } from "react-router";
import Hearder from "../components/shared/Hearder";
import Footer from "../components/shared/Footer";

export default function StoreLayout() {
  return (
    <>
      <Hearder />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
