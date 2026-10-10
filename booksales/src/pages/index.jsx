import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";

export default function Home({ books, onAddBook }) {
  return (
    <>
      <Hero />
      <ProductList books={books} onAddBook={onAddBook} />
    </>
  );
}
