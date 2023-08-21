import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy = [
  {
    id: "p1",
    title: "shoes",
    price: 300,
    description: "most used shoes ever",
  },
  {
    id: "p2",
    title: "T-Shirt",
    price: 500,
    description: "most used T-Shirt ever",
  },
  {
    id: "p3",
    title: "Pants",
    price: 600,
    description: "most used pants ever",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
