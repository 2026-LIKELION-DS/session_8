export default function PostWritePage() {
  return (
    <section>
      <div className="page-header">
        <h2>공지 작성</h2>
      </div>

      <form className="post-form">
        <label>
          제목
          <input type="text" placeholder="제목을 입력하세요" />
        </label>

        <label>
          내용
          <textarea placeholder="내용을 입력하세요" />
        </label>

        <button type="submit" className="outline-button">
          작성하기
        </button>
      </form>
    </section>
  );
}
