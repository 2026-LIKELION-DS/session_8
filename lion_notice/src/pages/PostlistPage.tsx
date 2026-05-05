import PostCard from "../components/PostCard";

const mockData = [
  {
    id: 1,
    title: "8차 리액트 세션",
    content: "마지막 세션..ㅜㅜ 수고 많앗뜨...",
  },
  {
    id: 2,
    title: "아기사자 파이팅ㅎㅎ",
    content: "여러분 안 어렵죵?",
  },
];

export default function PostListPage() {
  return (
    <section>
      <h2>게시글 목록</h2>

      <div className="post-list">
        {mockData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
}
