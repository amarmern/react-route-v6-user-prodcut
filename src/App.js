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
import MyApp from './components/MyApp';
import { ArrayAdd } from './pages/ArrayAdd';
import ProductCountIncrement from './Company/Gspann/ProductCountIncrement';
import ReducerCounter from './Company/Gspann/ReducerCounter';
import ProductSearch from './Company/Trika/ProductSearch';
import Infogain from './Company/infogain/Infogain';
import Hero from './components/ErrorsDemo/Hero';
//import ErrorBoundary from './components/ErrorsDemo/ErrorBoundary';
import ClickCounter from './components/ErrorsDemo/ClickCounter';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponet from './components/ErrorsDemo/FallbackComponet';
import Practice from './components/Practice';

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
const errorHandler = (error, errorInfo) => {
  console.log('Loging', error, errorInfo);
};

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={FallbackComponet}
        onError={errorHandler}
      >
        <div>Learn React</div>
        <Infogain />
        {/* <Hero heroName="Jocker" /> */}
        <ClickCounter />
      </ErrorBoundary>

      {/* <ProductSearch /> */}
      {/* <MyApp /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Greeting /> */}
      {/* <Myref /> */}
      {/* <ArrayAdd /> */}
      {/* <ProductCountIncrement /> */}
      {/* <ReducerCounter /> */}
      <Practice />
    </div>
  );
}

export default App;
