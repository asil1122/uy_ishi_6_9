import { Route, Routes } from "react-router-dom"
import { Home } from "./page/home/home"
import { UserDetail } from "./page/user-detail/user-detail"
function App() {

  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user-detail/:id" element={<UserDetail />}/>
      </Routes>
    </>
  )
}

export default App
