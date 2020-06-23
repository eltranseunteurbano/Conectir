/* eslint-disable import/prefer-default-export */
import Swal from 'sweetalert2';

const Welcome = () => {
  let timerInterval;

  Swal.fire({
    title: '¡Bienvenido!',
    text: 'Ahora eres parte de la comunidad más solidaria del mundo',
    icon: 'success',
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
    onClose: () => {
      clearInterval(timerInterval);
    }
  });
};

export { Welcome };
