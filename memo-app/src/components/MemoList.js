function MemoList({ memos, onMemoSelect, onMemoAdd}) {
  return (
    <>
      {memos.map((memo, index) => (
        <div key={index} onClick={() => onMemoSelect(index)}>
          {memo.text}
        </div>
      ))}
      <button onClick={onMemoAdd}>+</button>
    </>
  );
}

export default MemoList;
