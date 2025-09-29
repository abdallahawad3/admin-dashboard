/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { blue } from "@mui/material/colors";

interface IProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function MyDialog({ handleClose, open, handleSubmit }: IProps) {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <React.Fragment>
      <Dialog
        sx={{
          "& .muiltr-16bx961-MuiPaper-root-MuiDialog-paper": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiOutlinedInput-notchedOutline, & .muiltr-vy4cj6-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
            {
              borderColor: blue + "!important",
              outlineColor: blue + "!important",
            },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new event, please enter the event details here.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              margin="normal"
              id="name"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: blue[500],
                  },
                  "&:hover fieldset": {
                    borderColor: colors.blueAccent[500],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: colors.blueAccent[500],
                    borderWidth: 2,
                  },
                  "& .MuiInputLabel-root": {
                    color: blue[500],
                    "&.Mui-focused": {
                      color: colors.greenAccent[500],
                    },
                  },
                },
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: colors.redAccent[600],
              "&:hover": { backgroundColor: colors.redAccent[700] },
              color: colors.grey[100],
              padding: "8px 15px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: colors.blueAccent[600],
              "&:hover": { backgroundColor: colors.blueAccent[700] },
              color: colors.grey[100],
              padding: "8px 15px",
            }}
            form="subscription-form"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
