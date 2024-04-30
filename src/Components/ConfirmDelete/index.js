import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import {
  delete_Student,
  delete_Teacher,
  get_Student,
  get_Teacher,
} from "~/services/API_DBS";

export default function ConfirmDelete({
  displayConfirm,
  setDisplayConfirm,
  rowToAction,
  student,
  setDataStu,
  teacher,
  setDataTea,
}) {
  const handleClose = () => {
    setDisplayConfirm(false);
  };
  const handleDel = () => {
    if (student) {
      delete_Student(rowToAction)
        // .then((data) => {
        //   setDataStu(data["data"] ?? []);
        // })
        .then(() => {
          get_Student().then((data) => {
            setDataStu(data["data"] ?? []);
          });
        })
        .catch((error) => {
          console.error("Delete failed:", error);
          // Xử lý lỗi xảy ra khi thực hiện yêu cầu DELETE
        });
    } else if (teacher) {
      delete_Teacher(rowToAction)
        .then(() => {
          get_Teacher().then((data) => {
            setDataTea(data["data"] ?? []);
          });
        })
        .catch((error) => {
          console.error("Delete failed: ", error);
        });
    }

    handleClose();
  };

  return (
    <Dialog
      open={displayConfirm}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Xoá dữ liệu này ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Dữ liệu khi xóa không thể khôi phục
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Không</Button>
        <Button onClick={handleDel} autoFocus>
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}
