import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
}

export default function PostCard({ id, title, content }: PostCardProps) {
  return (
    <Link to={`/posts/${id}`} className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </Link>
  );
}
