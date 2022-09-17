import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 16,
    title: "My Second Book",
    description: "The Second book I wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((pr) => (
          <ProductItem
            key={pr.id}
            id={pr.id}
            title={pr.title}
            price={pr.price}
            description={pr.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
