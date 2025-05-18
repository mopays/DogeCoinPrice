import { useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import "./Page.css"; // Import your CSS file

function Dividend() {
  const [shares, setShares] = useState<number | "">(""); // จำนวนหุ้น
  const [dividendPerShare, setDividendPerShare] = useState<number | "">(""); // ปันผลต่อหุ้น
  const [totalDividend, setTotalDividend] = useState<number | null>(null); // ปันผลรวม4

  const handleCalculate = () => {
    if (shares !== "" && dividendPerShare !== "") {
      const result = Number(shares) * Number(dividendPerShare);
      setTotalDividend(result);
    }
  };

  const handleReset = () => {
    setShares("");
    setDividendPerShare("");
    setTotalDividend(null);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Box className="marquee-container" sx={{ mt: 0 }}>
        <Box className="marquee-content" sx={{ mt: 1, color: "blue" }}>  
          TISCO จ่ายปันผลเดือน เม.ย. และ ก.ย.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          TISCO จ่ายปันผลเดือน เม.ย. และ ก.ย.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          TISCO จ่ายปันผลเดือน เม.ย. และ ก.ย.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          TISCO จ่ายปันผลเดือน เม.ย. และ ก.ย.
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h5" gutterBottom>
          คำนวณปันผลที่ได้รับ จาก หุ้น TISCO
        </Typography>

        <Box sx={{ my: 2 }}>
          <Input
            type="number"
            placeholder="จำนวนหุ้นที่ถือ"
            value={shares}
            onChange={(e) =>
              setShares(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Input
            type="number"
            placeholder="ปันผลต่อหุ้น (บาท)"
            value={dividendPerShare}
            onChange={(e) =>
              setDividendPerShare(
                e.target.value === "" ? "" : parseFloat(e.target.value)
              )
            }
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleCalculate} sx={{ mr: 2 }}>
            คำนวณ
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleReset}>
            รีเซ็ต
          </Button>
        </Box>

        {totalDividend !== null && (
          <Box sx={{ mt: 3, fontSize: "20px" }}>
            <Typography>
              คุณจะได้รับปันผลทั้งหมด:{" "}
              <strong>{totalDividend.toFixed(2)} บาท</strong>
            </Typography>
          </Box>
        )}
      </Box>
      {/* 
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="tisco จ่ายปันผล 2 ครั้งต่อปี โดยจะจ่ายในเดือนเมษายน และเดือนกันยายนของทุกปี"
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <Button onClick={handleTooltipOpen}>
              {" "}
              กดเพื่อดูรายละเอียดการจ่ายปันผล
            </Button>
          </Tooltip>
        </div>
      </ClickAwayListener> */}
    </>
  );
}

export default Dividend;
