import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
    )
  };
  
export default NoPage;