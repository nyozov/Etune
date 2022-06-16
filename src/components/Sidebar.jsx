import { Typography, Box, IconButton } from "@mui/material";
import ButtonGroup from "./ButtonGroup";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
export default function BoxSx({ aboutOpen, setAboutOpen, setFormOpen }) {
  return (
    <Box
      className="sidebar white-glassmorphism"
      sx={{
        width: "300px",
        height: "100vh",
     

        marginLeft: "-120px",
      }}
    >
      <div className="icon-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <IconButton>
            <InstagramIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
          </IconButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <IconButton>
            <MailIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
          </IconButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <IconButton>
            <FacebookIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
          </IconButton>
        </motion.div>
      </div>
    </Box>
  );
}
