import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdEmail } from 'react-icons/md';

const CopyText = () => {
    const [textToCopy, setTextToCopy] = useState('here we go0000'); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };
  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
      <MdEmail className='text-green-800 text-5xl'></MdEmail>
      </CopyToClipboard>
    </div>
  )
}

export default CopyText
