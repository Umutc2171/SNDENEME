import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import AuthPage from "./pages/AuthPage";
import ContantPage from "./pages/ContantPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import "./App.css";
import CategoryPage from "./pages/admin/Categories/CatogoryPage";
import UpdateCategoryPage from "./pages/admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/admin/Products/CreateProductPage";
import ProductPage from "./pages/admin/Products/ProductPage";
import UpdateProductPage from "./pages/admin/Products/UpdateProduct";
import OrderPage from "./pages/admin/OrderPage.jsx";
// BLOG
import BlogPage from "./pages/BlogPage";
import BlogDetailsKamera from "./componets/BlogDetails/BlogDetailsKamera.jsx";
import BlogDetailsİp from "./componets/BlogDetails/BlogDetailsİp.jsx";
import BlogDetailsBilgisayar from "./componets/BlogDetails/BlogDetailsBilgisayar.jsx";
import BlogDetailsAlarm from "./componets/BlogDetails/BlogDetailsAlarm.jsx";
import BlogDetailsServerK from "./componets/BlogDetails/BlogDetailsServerK.jsx";
import CategoryDetails from "./componets/Categories/CategoryDetails.jsx";
// BLOG BİTİŞ

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/İletişim" element={<ContantPage />} />
      <Route path="/Mağaza" element={<ShopPage />} />
      <Route path="/Hesap" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/categories/:categoryId" element={<CategoryDetails />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      {/* BLOG */}
      <Route path="/Hizmetlerimiz" element={<BlogPage />} />
      <Route path="/Hizmetlerimiz/Kamera" element={<BlogDetailsKamera />} />
      <Route path="/Hizmetlerimiz/Bilgisayar" element={<BlogDetailsBilgisayar />} />
      <Route path="/Hizmetlerimiz/Alarm" element={<BlogDetailsAlarm />} />
      <Route path="/Hizmetlerimiz/İp-Kamera" element={<BlogDetailsİp />} />
      <Route path="/Hizmetlerimiz/ServerK" element={<BlogDetailsServerK />} />
      {/* BLOG BİTİŞ */}
      
      <Route path="/admin/*">
        <Route index element={<AdminUserPage />} />
        <Route path="users" element={<AdminUserPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
