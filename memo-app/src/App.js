import { useState } from 'react';
import MemoList from './components/MemoList';
import MemoDetail from './components/MemoDetail';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [memos, setMemos] = useLocalStorage('memos', []);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const handleMemoSelect = (index) => {
    setSelectedMemoIndex(index);
  };

  const handleMemoAdd = () => {
    const newMemo = { text: '新規メモ'};
    setMemos([...memos, newMemo]);
    setSelectedMemoIndex(memos.length);
  };

  return (
    <>
      <h1>メモアプリ</h1>
      <MemoList memos={memos} onMemoSelect={handleMemoSelect} onMemoAdd={handleMemoAdd} />
      {selectedMemoIndex !== null && <MemoDetail memo={memos[selectedMemoIndex]} />}
    </>
  );
}

export default App;
