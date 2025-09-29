import * as React from "react";
import Button from "@mui/material/Button";
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
  handleSubmit: (isDelete: boolean) => void;
}

export default function DeleteDialog({
  handleClose,
  open,
  handleSubmit,
}: IProps) {
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
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontWeight: "bold",
              color: colors.redAccent[500],
            }}
          >
            Are you sure you want to delete this event?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[600],
              "&:hover": { backgroundColor: colors.blueAccent[700] },
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
              backgroundColor: colors.redAccent[600],
              "&:hover": { backgroundColor: colors.redAccent[700] },
              color: colors.grey[100],
              padding: "8px 15px",
            }}
            form="subscription-form"
            onClick={() => handleSubmit(true)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
