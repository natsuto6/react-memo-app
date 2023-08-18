import { useLogin } from "../LoginContext";

function MemoList({ memos, onMemoSelect, onMemoAdd }) {
  const { loggedIn, login, logout } = useLogin();

  return (
    <>
      {memos.map((memo) => (
        <div
          key={memo.id}
          onClick={() => onMemoSelect(memo.id)}
          className="memo-item"
        >
          {memo.text.split("\n")[0]}
        </div>
      ))}
      <button onClick={loggedIn ? logout : login}>
        {loggedIn ? "ログアウト" : "ログイン"}
      </button>
      {loggedIn && <button onClick={onMemoAdd}>+</button>}
    </>
  );
}

export default MemoList;
