import "./About.css";

function About() {
  return (
    <div className="container py-4">
      <div className="row align-items-center gx-3">
        {/* Image lisar */}
        <div className="col-md-5 text-center">
          <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNus_zDePzgS7RAhk8B1mN2JDO4i-XtXdEmQ&s" alt="About Parfum"
            className="img-fluid rounded shadow about-img"
          />
        </div>

        {/* Katba limna */}
        <div className="col-md-7 fade-in text-start">
          <h2 className="mb-2">About Us</h2>
          <p className="lead mb-2">
            Welcome to ParfumSite, your number one source for all things perfume. We're dedicated to giving you the very best of fragrances, with a focus on quality, customer service, and uniqueness.
          </p>
          <ul>
            <li>Founded in 2023 by laila messoudi</li>
            <li>Based in Casablanca, Morocco</li>
            <li>Offering a curated selection of perfumes from around the world</li>
            <li>Committed to sustainability and ethical sourcing</li>
            <li>Providing exceptional customer service and support</li>
            <li>Join us on our journey to bring you the finest scents!</li>
            <li>Explore our collection and discover your signature scent</li>
            <li>Contact us for personalized recommendations and assistance</li>
            <li>Follow us on social media for the latest updates and promotions</li>
            <li>Thank you for choosing ParfumSite!</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
