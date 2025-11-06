"use client";
import { usePathname } from "next/navigation";
import Header from "./component/Header";
import AdminHeader from "./component/AdminNavbar";
import Footer from "./component/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );
}
