import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QRScanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: 250
    });

    scanner.render(
      (decodedText) => {
        alert(`✅ Đã quét: ${decodedText}`);
      },
      (error) => {
        console.warn(`Lỗi quét: ${error}`);
      }
    );
  }, []);

  return (
    <div>
      <h2>📷 Quét mã QR</h2>
      <div id="reader"></div>
    </div>
  );
}

export default QRScanner;
