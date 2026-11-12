import { toast, Flip } from "react-toastify";


/// success or failure nothification by useing toastify dependenciy ////
const toasters = (type: string, message?: string) => {
  if (type.toLowerCase() === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      progress: 0,
      theme: "colored",
      transition: Flip,
    });
  }
  else{
      toast.error(message, {
      position: "top-center",
      autoClose:1500,
      hideProgressBar: true,
      closeOnClick: false,
      progress: 0,
      theme: "colored",
      transition: Flip,
    });

  }
};
export default toasters;