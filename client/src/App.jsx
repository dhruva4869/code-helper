import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Book from "./routes/Book/book";
import SingleBook from "./routes/Book/singleBook";
import CreateBook from "./routes/Book/createBook";
import EditBook from "./routes/Book/editBook";


function App() {
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://code-helper-2.vercel.app/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/contact" element={ <Contact /> } /> 
          <Route path="/problems" element={ <Book /> } /> 
          <Route path="/problems/:slug" element={ <SingleBook /> } /> 
          <Route path="/addproblem" element={ <CreateBook /> } /> 
          <Route path="/editproblem/:slug" element={ <EditBook/> } />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
