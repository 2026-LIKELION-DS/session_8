import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
}

export default function PostCard({ id, title }: PostCardProps) {
  return (
    <Link to={`/posts/${id}`} className="post-card">
      <h3>{title}</h3>
    </Link>
  );
}
