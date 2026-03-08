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
