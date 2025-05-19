import React, { useState } from 'react'

function ConnecBluetooth() {
    
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [log, setLog] = useState([]);

  const logMessage = (msg) => setLog((prev) => [...prev, msg]);

  const connectBluetooth = async () => {
    try {
      logMessage('🔍 Quét tất cả thiết bị BLE...');
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true, // Quét tất cả
        optionalServices: [] // Không cần biết trước dịch vụ
      });

      logMessage(`📡 Đã chọn thiết bị: ${device.name || '[Không có tên]'}`);
      setDeviceInfo({
        name: device.name || '[Không có tên]',
        id: device.id
      });

      const server = await device.gatt.connect();
      logMessage('✅ Đã kết nối');

      // Dò tất cả dịch vụ (nếu muốn khám phá)
      const services = await server.getPrimaryServices();
      logMessage(`🛠 Tìm thấy ${services.length} dịch vụ:`);

      for (const service of services) {
        logMessage(`🔧 Service UUID: ${service.uuid}`);
      }

      device.addEventListener('gattserverdisconnected', () => {
        logMessage('❌ Thiết bị ngắt kết nối');
      });

    } catch (error) {
      console.error(error);
      logMessage(`❌ Lỗi: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>🛰 Quét Bluetooth (Web Bluetooth)</h2>
      <button onClick={connectBluetooth}>🔍 Quét & Kết nối</button>

      {deviceInfo && (
        <div style={{ marginTop: 20 }}>
          <h4>📋 Thông tin thiết bị:</h4>
          <p><strong>Tên:</strong> {deviceInfo.name}</p>
          <p><strong>ID:</strong> {deviceInfo.id}</p>
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <h4>📄 Log:</h4>
        <ul>
          {log.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ConnecBluetooth