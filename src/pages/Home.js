import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import logoImage from "../img/logo.png";

const ModernQR = () => {
  const qrRef = useRef(null);
  const canvasRef = useRef(null);
  const [qrCode, setQrCode] = useState(null);
  const [data, setData] = useState(
    '{"id":"TR109","d":"Tổ 4","u":"Chuyền 14A","t":"Giẻ lau có chứa thành phần nguy hại"}'
  );
  const [labelTop, setLabelTop] = useState("TR112");
  const [labelBottom, setLabelBottom] = useState("Rác tái chế");

  // Cập nhật labelTop từ JSON
  useEffect(() => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.id) {
        setLabelTop(parsed.id);
      }
      if (parsed.t) {
        setLabelBottom(parsed.t === 'Giẻ lau có chứa thành phần nguy hại' ? 'Giẻ lau dính mực' : parsed.t === 'Băng keo dính mực' ? 'Băng keo' : parsed.t);
      }
    } catch (e) {
      console.warn("Invalid JSON:", e);
    }
  }, [data]);

  useEffect(() => {
    const qr = new QRCodeStyling({
      width: 300,
      height: 300,
      data: encodeURIComponent(data),
      image: logoImage,
      qrOptions: {
        errorCorrectionLevel: "H", // tăng mức phục hồi lỗi
      },
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      cornersDotOptions: {
        type: "dot",
        color: "#000000",
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#000000",
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4,
        imageSize: 0.1, // giảm kích thước logo
      },
    });

    setQrCode(qr);
  }, []);

  useEffect(() => {
    if (qrCode && qrRef.current) {
      qrRef.current.innerHTML = ""; // clear trước khi append mới
      qrCode.update({ data: encodeURIComponent(data), image: logoImage });
      qrCode.append(qrRef.current);
    }
  }, [qrCode, data]);

  const downloadImage = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const qrCanvas = document.querySelector("canvas");
    const qrImage = qrCanvas.toDataURL("image/png");

    const img = new Image();
    img.onload = () => {
      const width = 400;
      const height = 500;

      canvas.width = width;
      canvas.height = height;

      // Vẽ nền trắng
      ctx.fillStyle = "#fff";
      ctx.fillRect(10, 20, width - 20, height - 30);

      // Vẽ khung bo tròn
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 10;
      const radius = 20;
      const x = 10,
        y = 20,
        w = width - 20,
        h = height - 30;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.stroke();

      // Label trên
      ctx.beginPath();
      ctx.moveTo(30, 20);
      ctx.lineTo(width - 30, 20);
      ctx.quadraticCurveTo(width - 10, 20, width - 10, 40);
      ctx.lineTo(width - 10, 70);
      ctx.quadraticCurveTo(width - 10, 90, width - 30, 90);
      ctx.lineTo(30, 90);
      ctx.quadraticCurveTo(10, 90, 10, 70);
      ctx.lineTo(10, 40);
      ctx.quadraticCurveTo(10, 20, 30, 20);
      ctx.closePath();

      ctx.fillStyle = "black";
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "normal 36px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(labelTop, width / 2, 70);

      // Vẽ QR ở giữa
      ctx.drawImage(img, 20, 90, 360, 320);

      // Label dưới
      ctx.beginPath();
      ctx.moveTo(30, 420);
      ctx.lineTo(width - 30, 420);
      ctx.quadraticCurveTo(width - 10, 420, width - 10, 440);
      ctx.lineTo(width - 10, 470);
      ctx.quadraticCurveTo(width - 10, 490, width - 30, 490);
      ctx.lineTo(30, 490);
      ctx.quadraticCurveTo(10, 490, 10, 470);
      ctx.lineTo(10, 440);
      ctx.quadraticCurveTo(10, 420, 30, 420);
      ctx.closePath();

      ctx.fillStyle = "black";
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "normal 36px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(labelBottom, width / 2, 460);

      // Tải về
      const link = document.createElement("a");
      link.download = `${labelTop}_qr.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = qrImage;
  };

  return (
    <div style={{ backgroundColor: "#fff", padding: 20, textAlign: "center" }}>
      <div style={{ color: "black", fontSize: "36px", marginBottom: 10 }}>
        {labelTop}
      </div>
      <div ref={qrRef} style={{ margin: "0 auto" }}></div>
      <div style={{ color: "black", fontSize: "28px", marginTop: 10 }}>
        {labelBottom}
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Nội dung QR"
          style={{ width: "80%" }}
        />
        <br />
        <input
          value={labelTop}
          onChange={(e) => setLabelTop(e.target.value)}
          placeholder="Label trên"
        />
        <input
          value={labelBottom}
          onChange={(e) => setLabelBottom(e.target.value)}
          placeholder="Label dưới"
        />
        <br />
        <button onClick={downloadImage} style={{ marginTop: 10 }}>
          Tải QR PNG
        </button>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </div>
    </div>
  );
};

export default ModernQR;
