import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './NotFound';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
const TestFunction =()=>{
  console.log('test function')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/blog">Post</a></li>
    </ul>
      <Routes>
        <Route path='/' element={<App users={[2,3,4]} posts={[{id:1},{id:2}]}/>} />
        <Route path='/Contact' element={<Contact MyFunction={TestFunction}/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:pid' element={<BlogDetail/>} />
        <Route path='/*'  element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

