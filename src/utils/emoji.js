import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function ChatApp() {
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessage(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => setShowPicker(!showPicker)}>😀</button>
      </div>

      {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}

      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatApp;
