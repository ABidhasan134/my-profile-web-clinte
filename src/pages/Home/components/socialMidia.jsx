import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const SocialMidia = () => {
  const [textToCopy, setTextToCopy] = useState("abedhasan134@gmail.com"); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };
  return (
    <div className="m-2 grid items-center">
      <a
        className="text-5xl "
        href="https://www.facebook.com/profile.php?id=100008589552530"
      >
        <FaFacebook className="text-blue-500"></FaFacebook>
      </a>
      <div class="divider divider-horizontal"></div>
      {/* email copying */}
      <div>
        <div className="tooltip" data-tip="abeydhasan134@gmail.com">
          <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
            <MdEmail className="text-green-800 text-5xl"></MdEmail>
          </CopyToClipboard>
        </div>
      </div>
      <div class="divider divider-horizontal text-blue-600"></div>
      <a href="https://www.linkedin.com/in/raisul-islam134/" className="text-5xl ">
        <IoLogoLinkedin className="text-blue-500"></IoLogoLinkedin>
      </a>
      <div class="divider divider-horizontal"></div>
      <a href="https://github.com/ABidhasan134" className="text-5xl ">
        <FaGithub className="text-green-800 text-5xl"></FaGithub>
      </a>
    </div>
  );
};

export default SocialMidia;
