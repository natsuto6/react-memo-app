import { useState } from "react";
import { useLogin } from "../AuthContext";

function MemoDetail({ memo, onMemoSave, onMemoDelete }) {
  const { loggedIn } = useLogin();
  const [memoText, setMemoText] = useState(memo ? memo.text : "");

  const handleSave = () => {
    onMemoSave({ ...memo, text: memoText });
  };

  return (
    <>
      <textarea
        value={memoText}
        onChange={(e) => setMemoText(e.target.value)}
        readOnly={!loggedIn}
      />
      {loggedIn && (
        <>
          <button onClick={handleSave}>編集</button>
          <button className="delete-button" onClick={onMemoDelete}>
            削除
          </button>
        </>
      )}
    </>
  );
}

export default MemoDetail;
