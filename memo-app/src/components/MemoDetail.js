import { useState } from 'react';

function MemoDetail({ memo, onMemoSave, onMemoDelete }) {
  const [memoText, setMemoText] = useState(memo ? memo.text : '');

  const handleSave = () => {
    onMemoSave({ ...memo, text: memoText});
  };

  return (
    <>
      <textarea
        value={memoText}
        onChange={(e) => setMemoText(e.target.value)}
      />
      <button onClick={handleSave}>編集</button>
      <button className="delete-button" onClick={onMemoDelete}>
        削除
      </button>
    </>
  );
}

export default MemoDetail;
