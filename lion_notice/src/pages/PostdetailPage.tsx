export default function PostDetailPage() {
  return (
    <section>
      <div className="page-header">
        <h2>게시글 상세 페이지</h2>

        <div className="button-group">
          <button className="outline-button">수정하기</button>
          <button className="outline-button">삭제하기</button>
        </div>
      </div>

      <div className="post-detail">
        <h3>게시글 제목</h3>
        <p>
          게시글 내용이 들어가는 자리...게시글 내용이 들어가는 자리...게시글
          내용이 들어가는 자리...게시글 내용이 들어가는 자리...게시글 내용이
          들어가는 자리...
        </p>
      </div>
    </section>
  );
}
