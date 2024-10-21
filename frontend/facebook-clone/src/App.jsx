import './App.css'
import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { RightSideBar } from './components/RightSideBar'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
    <Header />
    <main className='flex bg-gray-100'>
      {/* Left sidebar */}
      <Sidebar />
      {/* Create post feed */}
      <Feed />
      {/* Right sidebar */}
      <RightSideBar />
    </main>
    
    </>
  )
}

export default App
