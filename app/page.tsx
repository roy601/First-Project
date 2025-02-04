
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="bold">POS Software</h1>
      <Link href="/users" className='btn btn-primary bold mb-4'>UserPage</Link>
      <ProductCard />
    </main>
  );
}
