import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.from("products").select("*").order("created_at", { ascending: false })
      .then(({ data }) => { setProducts(data || []); setLoading(false); });
  }, []);
  return { products, loading };
}

export function useProductImages(productId) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (!productId) return;
    supabase.from("products_images").select("*").eq("product_id", productId).order("sort_order")
      .then(({ data }) => setImages(data || []));
  }, [productId]);
  return images;
}
