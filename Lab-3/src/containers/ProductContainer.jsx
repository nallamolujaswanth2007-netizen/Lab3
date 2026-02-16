import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SkeletonLoader from "../components/SkeletonLoader";
import { fetchAdultProducts } from "../utils/fakeApi";
import { createFetchTracker } from "../utils/fetchTracker";

const trackFetch = createFetchTracker();

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchInfo, setFetchInfo] = useState(null);

  const loadProducts = async () => {
    setLoading(true);

    try {
      const response = await fetchAdultProducts();

      // Promise chaining
      Promise.resolve(response)
        .then((data) => {
          setProducts(data);
          setFetchInfo(trackFetch());
          setLoading(false);
        });
    } catch (error) {
      console.error("Error loading products");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <div className="container">
      <div className="info-bar">
        <span>Fetch Attempts: {fetchInfo?.attempts}</span>
        <span>Last Fetch: {fetchInfo?.lastFetchTime}</span>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductContainer;
