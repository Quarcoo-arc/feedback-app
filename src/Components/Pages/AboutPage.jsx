import { Link } from "react-router-dom";
import Card from "../Shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This is a React app for leaving feedback for products and services
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">{"<"}Back</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
