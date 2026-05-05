import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom';
import Home from './views/home';
import News from './views/news';
import useFetchData from './hooks/usefetch';
import useCachedFetchData from './hooks/use-cached-fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/id:' element={<News />} />


        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
