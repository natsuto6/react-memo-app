function MemoDetail({ memo }) {
  return <textarea value={memo ? memo.text : ""} readOnly />;
}

export default MemoDetail;
