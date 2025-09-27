import "./Welcome.css";

function Welcome() {
  return (
    <section className="section">
      <h1 className="heading">Welcome to Our Website</h1>

      <p className="paragraph">
        We build modern web applications using React, Angular, and Node.js.
        Our mission is to make learning easy and fun for everyone.
      </p>

      <img
        className="image"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Nature"
      />

      <h2 className="subheading">Why Choose Us?</h2>
      <ul className="list">
        <li>Modern & Responsive Design</li>
        <li>Focus on Practical Learning</li>
        <li>Fast and Optimized Performance</li>
        <li>Supportive Community</li>
      </ul>

      <button className="button" onClick={() => alert("Thank you for joining! Toll Ft")}>
        Join Now
      </button>
    </section>
  );
}

export default Welcome;