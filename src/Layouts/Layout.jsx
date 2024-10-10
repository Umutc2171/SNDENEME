import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

const inAdmin = window.location.pathname.startsWith("/admin")

export const Layout = inAdmin ? AdminLayout : MainLayout;
