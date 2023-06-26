
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import FoodList from './pages/foodList/FoodList';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from './stores/index.store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='menu/:type' element={<FoodList />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
