import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import ErrorPage from './pages/Error';
import Greeting from './components/Greeting';
import PostsPage from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/user', element: <Users /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/posts', element: <PostsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div>Learn React</div>
      <RouterProvider router={router} />
      {/* <Greeting /> */}
    </div>
  );
}

export default App;
