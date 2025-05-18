import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {
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
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Dogecoin Price Tracker
      </Box>
      <Box sx={{ textAlign: "center", mt: 5, backgroundColor: "white" }}>
        {lastUpdated && (
          <Box sx={{ fontSize: "16px", mt: 1 }}>
            อัปเดตล่าสุด: {lastUpdated} <p>${price.toFixed(5)}</p>
          </Box>
        )}

        <hr />
        <Box>
          ราคาต่ำสุดที่ควรตั้ง (Lower Price): <p>${priceLower}</p>
        </Box>
        <Box>
          ราคาสูงสุดที่ควรตั้ง (Upper Price):
          <p> ${priceUpper}</p>
        </Box>
      </Box>
    </>
  );
}

export default Home;
