import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        maxWidth: '90%',
        minWidth: 300,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}>
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <div style={{ marginBottom: 20 }}>{children}</div>
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

const ListWeight = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const dateStr = selectedDate.toISOString();
      console.log(dateStr);
      const response = await fetch(
        `https://duanrac-api-node-habqhehnc6a2hkaq.southeastasia-01.azurewebsites.net/history/date?date=${dateStr}`
      );
      if (response.ok) {
        const data = await response.json();
        const formatted = data.map((item) => ({
          id: item.weighingTime,
          user: item.fullName,
          team: item.departmentName,
          line: item.unitName || '',
          wasteType: item.trashName,
          weight: item.weightKg + ' kg',
          timestamp: moment.utc(item.weighingTime).tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY - HH:mm'),
        }));
        setHistoryData(formatted);
      } else {
        setModalMessage('Không thể tải dữ liệu lịch sử');
        setModalShow(true);
      }
    } catch (err) {
      setModalMessage('Lỗi kết nối tới server');
      setModalShow(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [selectedDate]);

  return (
    <>
      <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ color: '#2c3e50' }}>Lịch sử cân rác</h2>

        <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <label>Chọn ngày: </label>
          <input
            type="date"
            value={moment(selectedDate).format('YYYY-MM-DD')}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            style={{ padding: '6px 12px', borderRadius: 4, border: '1px solid #ccc' }}
          />
          <button
            onClick={fetchHistory}
            style={{
              padding: '6px 12px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Làm mới
          </button>
        </div>

        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          <div>
            {historyData.length === 0 ? (
              <p>Không có dữ liệu</p>
            ) : (
              historyData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <strong style={{ fontSize: 16 }}>{item.user}</strong>
                    <span style={{ float: 'right', fontSize: 12, color: '#888' }}>{item.timestamp}</span>
                  </div>
                  <div style={{ fontSize: 14 }}>
                    <div><strong>Tổ:</strong> {item.team}</div>
                    <div><strong>Chuyền:</strong> {item.line}</div>
                    <div><strong>Loại rác:</strong> {item.wasteType}</div>
                    <div><strong>Khối lượng:</strong> <span style={{ color: '#e67e22', fontWeight: 'bold' }}>{item.weight}</span></div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <Modal
        show={modalShow}
        onClose={() => setModalShow(false)}
        title="Thông báo"
      >
        {modalMessage}
      </Modal>
    </>
  );
};

export default ListWeight;
