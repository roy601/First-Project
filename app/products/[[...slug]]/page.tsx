import React from "react";
interface Product {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Product) => {
  return (
    <div>
       ProductPage {slug} {sortOrder}
    </div>
  );
};
export default ProductPage;
