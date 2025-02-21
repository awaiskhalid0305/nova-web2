import { toast } from "react-toastify";
export const GreenNotify = (text) => {
  toast.success(text, {
    // position: toast.POSITION.TOP_CENTER,
  });
};

export const RedNotify = (text) => {
  toast.error(text, {
    // position: toast.POSITION.TOP_CENTER,
  });
};
