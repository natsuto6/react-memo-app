import { useState } from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";
import useLocalStorage from "./hooks/useLocalStorage";
import { LoginProvider } from "./LoginContext";

function App() {
  const [memos, setMemos] = useLocalStorage("memos", []);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const handleMemoSelect = (index) => {
    setSelectedMemoIndex(index);
  };

  const handleMemoAdd = () => {
    const newMemo = { id: memos.length, text: "新規メモ" };
    setMemos([...memos, newMemo]);
    setSelectedMemoIndex(memos.length);
  };

  const handleMemoSave = (updateMemo) => {
    const updateMemos = [...memos];
    updateMemos[selectedMemoIndex] = updateMemo;
    setMemos(updateMemos);
  };

  const handleMemoDelete = () => {
    const updateMemos = [...memos];
    updateMemos.splice(selectedMemoIndex, 1);
    setMemos(updateMemos);
    setSelectedMemoIndex(null);
  };

  return (
    <LoginProvider>
      <MemoList
        memos={memos}
        onMemoSelect={handleMemoSelect}
        onMemoAdd={handleMemoAdd}
      />
      {selectedMemoIndex !== null && (
        <MemoDetail
          memo={memos[selectedMemoIndex]}
          onMemoSave={handleMemoSave}
          onMemoDelete={handleMemoDelete}
        />
      )}
    </LoginProvider>
  );
}

export default App;
