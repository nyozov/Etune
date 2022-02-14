import { Box, Button, Typography, Modal } from "@mui/material"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormGroup,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import PaymentForm from "./PaymentForm";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "white",
  backdropFilter: "blur(5px)",
  borderRadius: "2px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const [formResults, setFormResults] = useState({
    email: "",
    engine: "",
    service: "",
    mods: "",
  });

  const [formMode, setFormMode] = useState("options");
  
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormResults((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();


    setFormMode("review");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormMode("options");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ y: 365, visibility: "visible" }}
          transition={{ ease: "linear", duration: 1 }}
        >
          {formMode === "options" && (
            <Box className="order-form" sx={style}>
              <IconButton className="close-button" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography
                className="form-title"
                sx={{ textAlign: "center" }}
                variant="h5"
              >
                Order Information
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormControl sx={{ margin: "15px" }}>
                    <InputLabel htmlFor="email-input">Email address</InputLabel>
                    <Input
                      required
                      onChange={handleChange}
                      value={formResults.email}
                      type="email"
                      id="email-input"
                      name="email"
                    />
                    <FormHelperText id="my-helper-text">
                      You can use a temporary email from <a target='_blank' href='https://temp-mail.org/'>Tempmail</a> to test services
                    </FormHelperText>
                  </FormControl>

                  <FormControl sx={{ margin: "15px" }}>
                    <InputLabel htmlFor="year-select">Select Engine</InputLabel>

                    <Select
                      onChange={handleChange}
                      sx={{ color: "black" }}
                      required
                      value={formResults.engine}
                      labelId="demo-simple-select-label"
                      id="year-select"
                      name="engine"
                      label="Select Engine"
                    >
                      <MenuItem value={"K20"}>
                        K20 (2002-2011 SI, Type-S)
                      </MenuItem>
                      <MenuItem value={"EJ20/EJ25"}>
                        EJ20/EJ25 (2002-2014 WRX, STI)
                      </MenuItem>
                      <MenuItem value={"4B11T"}>
                        4B11T (2010-2016 Evo, Ralliart)
                      </MenuItem>
                    </Select>
                    <FormHelperText>
                      We currently only offer services for the above platforms.
                      If you do not see your vehicle on the list, you can
                      contact us directly.
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ margin: "15px" }}>
                    <InputLabel htmlFor="year-select">
                      Select Service
                    </InputLabel>

                    <Select
                      required
                      onChange={handleChange}
                      name="service"
                      value={formResults.service}
                      sx={{ color: "black" }}
                      labelId="demo-simple-select-label"
                      id="year-select"
                      label="Select Service"
                    >
                      <MenuItem value={"Burble"}>
                        Burble Tune [$400.00]
                      </MenuItem>
                      <MenuItem value={"Performance"}>
                        Performance Tune [$400.00]
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ margin: "15px" }}>
                    <TextField
                      required
                      defaultValue={formResults.mods}
                      name="mods"
                      onChange={handleChange}
                      multiline
                      rows={4}
                      placeholder="Please enter all vehicle modifications"
                    />
                  </FormControl>

                  <FormControl sx={{ margin: "1em" }}>
                    <Button type="submit" variant="contained">
                      Proceed To Checkout
                    </Button>
                  </FormControl>
                </FormGroup>
              </form>
            </Box>
          )}
          {formMode === "review" && (
            <ReviewForm
              formResults={formResults}
              formMode={formMode}
              setFormMode={setFormMode}
            />
          )}
          {formMode === "payment" && (
            <PaymentForm
              formResults={formResults}
              handleClose={handleClose}
              formResults={formResults}
              formMode={formMode}
              setFormMode={setFormMode}
            />
          )}
        </motion.div>
      </Modal>
    </div>
  );
}
