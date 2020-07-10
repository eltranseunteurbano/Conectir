import Swal from "sweetalert2";

export const Welcome = () => {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Ahora eres parte de la comunidad más solidaria del mundo",
    icon: "success",
    showConfirmButton: false,
  });
};


export const errorAlert = (text) => {
    Swal.fire({
      title: "¡Ups..!",
      text,
      icon: "error",
      showConfirmButton: false,
    });
  };
