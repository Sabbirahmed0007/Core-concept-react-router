import { Children, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Product from './Components/Product/Product.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users/Users2.jsx';
import UserDetails from './Components/Users/UserDetails.jsx';
import Posts from './Components/Post/Posts.jsx';
import PostCard from './Components/Post/PostCard.jsx';


const userPromise = fetch('https://dummyjson.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/products',
        Component: Product
      },

      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/users',
        Component: Users,
        loader: () => fetch('https://dummyjson.com/users'),
      },
      {
        path: '/users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>,
        
      },
      {
        path: 'users/:id',
        loader: ({ params })=>  fetch(`https://dummyjson.com/users/${params.id}`)
       ,
        Component: UserDetails,
        
        
      },

      {
        path: '/posts',
        loader: () => fetch('https://dummyjson.com/posts'),

        Component: Posts,
        
      },
      {
        path: '/posts/:id',
        loader: ({ params }) => fetch(`https://dummyjson.com/posts/${params.id}`) ,
        Component:PostCard,
      }
    ]

  },
  {
    path: '/about',
    Component: About,
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
      {Children}
    </RouterProvider>
  </StrictMode>,
)
