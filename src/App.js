import { createContext, useContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import ItemListChecked from './pages/ItemListChecked';
import ItemListDropDown from './pages/ItemListDropDown';
import SearchTerm from './pages/SearchTerm';
import TicTac from './pages/TicTac';
import PostsPage from './pages/Posts';
import ErrorPage from './pages/Error';

import Greeting from './components/Greeting';
import Myref from './components/Myref';
import MyApp from './components/MyApp';
import { ArrayAdd } from './pages/ArrayAdd';
import ProductCountIncrement from './Company/Gspann/ProductCountIncrement';
import ReducerCounter from './Company/Gspann/ReducerCounter';
import ProductSearch from './Company/Trika/ProductSearch';
import Infogain from './Company/infogain/Infogain';
import Hero from './components/ErrorsDemo/Hero';
//import ErrorBoundary from './components/ErrorsDemo/ErrorBoundary';
//import ClickCounter from './components/ErrorsDemo/ClickCounter';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponet from './components/ErrorsDemo/FallbackComponet';
import Practice from './components/Practice';
import ClickCounter from './Hoc/CounterExample/ClickCounter';
import HoverCounter from './Hoc/CounterExample/HoverCounter';
import MyComponent from './components/MyComponent';
import Memohooks from './hooks/Memohooks';
import Userefhooks from './hooks/Demouserefhooks';
import Callbackhooks from './hooks/Callbackhooks';
import useLocalStorage from './customhooks/useLocalStorage';
import AsyncPage from './components/AsyncPage';
import { CounterContext } from './hooks/contexthooksdemo/Context/Counter';
import Counter from './customhooks/Counter';
import ApiExample from './customhooks/ApiExample';
//import Counter from './components/Counter.js'; // component for context use

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
      { path: '/searchperson', element: <SearchTerm /> },
      { path: '/listitems', element: <ItemListChecked /> },
      { path: '/itemselect', element: <ItemListDropDown /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);
const errorHandler = (error, errorInfo) => {
  console.log('Loging', error, errorInfo);
};

export const MyContext = createContext('');
function App() {
  // const countereState = useContext(CounterContext);
  // const [name, setName] = useLocalStorage('name', '');
  //const [text, setText] = useState('');
  // console.log(HoverCounter.add(1, 2));
  return (
    <div className="App">
      {/* <h1>Count-- {countereState.count}</h1> */}

      {/* <AsyncPage /> */}
      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      {/* <Callbackhooks /> */}
      {/* <Userefhooks /> */}
      {/* <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider> */}
      {/* <ClickCounter name={'click counter'} />
      <HoverCounter name={'mouse over counter'} /> */}

      {/* <ErrorBoundary
        FallbackComponent={FallbackComponet}
        onError={errorHandler}
      >
        <div>Learn React</div>
        <Infogain />
        <Hero heroName="Jocker" />
        <ClickCounter />
      </ErrorBoundary> */}

      {/* <ProductSearch /> */}
      {/* <MyApp /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Greeting /> */}
      {/* <Myref /> */}
      {/* <ArrayAdd /> */}
      {/* <ProductCountIncrement /> */}
      {/* <ReducerCounter /> */}
      {/* <Practice /> */}
      {/* <Counter /> */}
      <ApiExample />
    </div>
  );
}

export default App;
