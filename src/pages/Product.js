import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import "./Product.css";
import product1 from "../assets/product-1.jpg"; 

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const productRefs = useRef([]);

  useEffect(() => {
    productRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Premium Biomass Pellets",
      description:
        "Made from high-quality organic materials, ensuring clean and efficient energy production.",
      image: product1,
    },
  ];

  return (
    <div className="product-page">
      <PageTransition />
      <div className="product-header">
        <h1>Our Biomass Products</h1>
        <p>
          Discover high-quality, eco-friendly biomass pellets for sustainable energy
          solutions.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            ref={(el) => (productRefs.current[index] = el)}
          >
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
