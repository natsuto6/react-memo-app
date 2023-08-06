function MemoList({ memos, onMemoSelect, onMemoAdd }) {
  return (
    <>
      {memos.map((memo, index) => (
        <div
          key={index}
          onClick={() => onMemoSelect(index)}
          className="memo-item"
        >
          {memo.text.split("\n")[0]}
        </div>
      ))}
      <button onClick={onMemoAdd}>+</button>
    </>
  );
}

export default MemoList;
