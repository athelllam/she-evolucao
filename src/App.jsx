import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'

const Home = lazy(() => import('./pages/Home'))
const Hidratante = lazy(() => import('./pages/Hidratante'))
const Stick = lazy(() => import('./pages/Stick'))
const Gummies = lazy(() => import('./pages/Gummies'))
const Ovinhos = lazy(() => import('./pages/Ovinhos'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#fffafc] flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-[2px] w-[180px] overflow-hidden rounded-full bg-pink-100">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 animate-[sheLoad_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hidratante" element={<Hidratante />} />
          <Route path="/stick" element={<Stick />} />
          <Route path="/gummies" element={<Gummies />} />
          <Route path="/ovinhos" element={<Ovinhos />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
