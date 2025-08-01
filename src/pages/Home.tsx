import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(import.meta.env.VITE_PRODUCT_API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="page home content-wrapper">
      <h1 className="text-3xl font-bold mb-4">Welcome to Theme Switcher</h1>
      <p className="mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        adipisci sit harum! Similique dicta praesentium optio, culpa quidem
        impedit accusamus, distinctio sint ullam non ea odio.
      </p>
      <button className="themed-button">
        Click Me
      </button>

      <div className="dynamic-grid mt-4">
        {products.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="card-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain mb-3"
            />
            <h4 className="text-sm font-medium">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
