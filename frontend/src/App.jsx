import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import PageLoader  from './components/PageLoader'
import { Navigate, Route, Routes } from 'react-router'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'


function App() {
  const { checkAuth , isCheckingAuth,authUser} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth) return <PageLoader />

  
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      {/* DECORATORS - GRID BG & GLOW SHAPES */}
      <div className="absolute inset-0 bg-black" />

<div className="absolute top-0 -left-16 size-[520px] bg-[#00ff55] opacity-30 blur-[160px]" />
<div className="absolute bottom-0 -right-16 size-[520px] bg-[#00ff99] opacity-30 blur-[160px]" />



    <Routes>
      <Route path='/' element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
      <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
      <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
    </Routes>
    
    <Toaster />
    </div>
    
  )
}

export default App
