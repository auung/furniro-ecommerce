import { getAllProducts } from "@/lib/actions/product";
import ProductTable from "./product-table";

const Products = async () => {
  const products = await getAllProducts();

  return (
    <div>
      <ProductTable data={products} />
    </div>
  );
};

export default Products;
