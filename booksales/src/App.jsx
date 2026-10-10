import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import StoreLayout from "./layouts";
import initialBooks from "./utils/books";

function App() {
  const [books, setBooks] = useState(initialBooks);

  function addBook(book) {
    setBooks((currentBooks) => {
      const nextId = currentBooks.reduce(
        (highestId, currentBook) => Math.max(highestId, currentBook.id),
        0,
      );

      return [...currentBooks, { ...book, id: nextId + 1 }];
    });
  }

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<StoreLayout />}>
              <Route
                index
                element={<Home books={books} onAddBook={addBook} />}
              />
              <Route
                path="books"
                element={<Books books={books} onAddBook={addBook} />}
              />
              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
