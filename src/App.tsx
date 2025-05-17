import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const [price, setPrice] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [error] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/dogeusdt@trade"
    );

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const currentPrice = parseFloat(data.p); // 'p' is the price field
        setPrice(currentPrice);
        setLastUpdated(new Date().toLocaleString()); // Set current datetime
      } catch (err) {
        console.error("WebSocket message error:", err);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => socket.close(); // cleanup
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (price === null) return <div>Loading...</div>;

  const priceLower = (price * 0.95).toFixed(4);
  const priceUpper = (price * 1.05).toFixed(4);

  return (
    <Box sx={{ textAlign: "center", mt: 5, backgroundColor: "white" }}>
      {lastUpdated && (
        <Box sx={{ fontSize: "16px", mt: 1, color: "gray" }}>
          อัปเดตล่าสุด: {lastUpdated}
        </Box>
      )}
      <Box sx={{ mt: 5, fontSize: "24px", fontWeight: "bold" }}>
        Dogecoin Price Tracker
      </Box>
      <Box sx={{ fontSize: "20px", mt: 2 }}>
        ราคาปัจจุบัน: ${price.toFixed(5)}
      </Box>

      <hr />
      <Box>
        ราคาต่ำสุดที่ตั้ง (Lower Price): <p>${priceLower}</p>
      </Box>
      <Box>
        ราคาสูงสุดที่ตั้ง (Upper Price):
        <p> ${priceUpper}</p>
      </Box>
    </Box>
  );
}

export default App;
// import { useEffect, useState } from "react";
