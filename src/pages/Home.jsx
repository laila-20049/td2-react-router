import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero small-image-hero">
        <div className="hero-text">
          <h1 className="hero-title">Découvrez l'élégance de nos parfums</h1>
        <ul>
            <li>Fragrances uniques</li>
            <li>Ingrédients de qualité</li>
            <li>Emballages élégants</li>
            <li>Livraison rapide</li>
            <li>Service client dédié</li>
            <li>Éco-responsable</li>
            <li>Offres exclusives</li>
        </ul>
          <Link to="/products" className="btn btn-hero">Découvrir</Link>
        </div>
        <div className="hero-image">
          <img 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zD_5VeMZPMeX_iqb_BVe8n28KuNEJekHhg&s" alt="Parfum"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
