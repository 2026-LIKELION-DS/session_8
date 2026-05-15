import { Link } from "react-router-dom";

export default function PostCard({ id, title }) {
  return (
    <Link to={`/posts/${id}`} className="post-card">
      <h3>{title}</h3>
    </Link>
  );
}
