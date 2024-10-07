import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Component4.css";

const Component4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login", { replace: true });
  };
  return (
    <Button
      className={`component-2 ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "20",
        background: "#3abef9",
        borderRadius: "10px",
        "&:hover": { background: "#3abef9" },
        height: 49,
      }}
      onClick={handleClick}
    >
      Login
    </Button>
  );
};

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
