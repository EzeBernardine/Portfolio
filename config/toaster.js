import toastr from "toastr";

toastr.options = {
	"closeButton": true,
	"debug": false,
	"newestOnTop": true,
	"progressBar": true,
	"positionClass": "toast-top-right",
	"preventDuplicates": true,
	"onclick": () => true,
	"showDuration": 300,
	"hideDuration": 1000,
	"timeOut": 5000,
	"extendedTimeOut": 500,
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};



export const ToastMessage = (header, message) => {
	toastr[header.toLowerCase()](message);
};

export const type = {
	SUCCESS: "SUCCESS",
	INFO: "INFO",
	ERROR: "ERROR",
	WARNING: "WARN"
};