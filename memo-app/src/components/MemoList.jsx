import { useLogin } from "../LoginContext.jsx";

function MemoList({ memos, onMemoSelect, onMemoAdd }) {
  const { loggedIn, login, logout } = useLogin();

  return (
    <>
      <div className="login-button">
        <button onClick={loggedIn ? logout : login}>
          {loggedIn ? "ログアウト" : "ログイン"}
        </button>
      </div>
      {memos.map((memo) => (
        <div
          key={memo.id}
          onClick={() => onMemoSelect(memo.id)}
          className="memo-item"
        >
          {memo.text.split("\n")[0]}
        </div>
      ))}
      {loggedIn && <button onClick={onMemoAdd}>+</button>}
    </>
  );
}

export default MemoList;
