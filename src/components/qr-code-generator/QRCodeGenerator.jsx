import React, { useState } from "react";
import "./style.css";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleClickGenerator() {
    setQrCode(input);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enter your value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleClickGenerator()}
        >
          Generate
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
