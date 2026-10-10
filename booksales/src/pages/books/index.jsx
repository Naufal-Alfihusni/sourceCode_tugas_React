import ProductList from "../../components/shared/ProductList";

export default function Books({ books, onAddBook }) {
  return (
    <ProductList books={books} onAddBook={onAddBook} />
  );
}
