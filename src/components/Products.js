import ProductCard from "./ProductCard";
import dataJson from "../products.json";

export default function Products() {
  const productKeys = Object.keys(dataJson);
  console.log(productKeys);
  // let keyId
  // const name = productKeys.map((item, index) => {
  //     console.log(item, index)
  //     this.keyId = index
  //     return item
  // })

  return (
    <div className="products">
      <div className="product-cards">
        {productKeys.map((productKey) => {
          const productName = productKey;
          const productCost = dataJson[productKey].cost;

          return (
            <ProductCard
              nameProduct={productName}
              cost={productCost}
              key={productName}
            />
          );
        })}
      </div>
    </div>
  );
}
