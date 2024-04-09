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
import Myref from './components/Myref';
import TicTac from './pages/TicTac';
import Practice from './pages/Practice';
import MyApp from './components/MyApp';
import { ArrayAdd } from './pages/ArrayAdd';
import ProductCountIncrement from './Company/Gspann/ProductCountIncrement';
import ReducerCounter from './Company/Gspann/ReducerCounter';
import ProductSearch from './Company/Trika/ProductSearch';

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
      { path: '/tictoc', element: <TicTac /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div>Learn React</div>
      <ProductSearch />
      {/* <MyApp /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Greeting /> */}
      {/* <Myref /> */}
      {/* <Practice /> */}
      {/* <ArrayAdd /> */}
      {/* <ProductCountIncrement /> */}
      {/* <ReducerCounter /> */}
    </div>
  );
}

export default App;
