import { useEffect, useState } from "react";
import ShoppingCard from "./ShoppingCard";
import { allProduct } from "../hooks/allProduct";
import type { Product } from "../lib/types";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const result = await allProduct();
    if (result?.data?.data) {
      setProducts(result.data.data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="container mx-auto px-6 py-2">
        <section className="mt-16 w-full h-52 bg-primary flex items-center justify-center font-mon rounded-4xl">
          banner
        </section>

        <section>
          <h1 className="text-3xl font-mon font-bold mt-5 underline text-center mb-5">
            Shope now:
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 ">
            {products.map((product) => (
              <ShoppingCard key={product.id} item={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
