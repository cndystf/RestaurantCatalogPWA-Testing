//code splitting

const initSwalSuccess = (title) => {
  import('sweetalert2')
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        title,
        toast: true,
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    })
    .catch((err) => console.error(err));
};

const initSwalError = (title) => {
  import('sweetalert2')
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        title,
        toast: true,
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    })
    .catch((err) => console.error(err));
};

export { initSwalSuccess, initSwalError };
