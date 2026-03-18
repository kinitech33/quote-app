import { Routes, Route, Link } from "react-router-dom"

function Home() {
  return <>
  <h2>Home Page - Quotes Coming Soon</h2>
  <p>yoo 222</p></>
}

function Favorites() {
  return <h2>Favorites Page</h2>
}

function About() {
  return <>
  <h2>About Page was here</h2>
  <p>kjfnknnfnandn</p>
  </>
  
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;