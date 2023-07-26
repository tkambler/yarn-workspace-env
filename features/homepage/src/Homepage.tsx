import { Link } from 'react-router-dom';

export const HomepageFeature = () => {
  return (
    <div>
      This is the homepage feature.
      <p>
        <Link to="/settings">Go to Settings</Link>
      </p>
    </div>
  );
};
