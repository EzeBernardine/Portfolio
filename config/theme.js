 
const white = "#fff";
const transparent = "transparent";

const palette = {
	white,
	common: {
		white,
		transparent,
		black: "#000000",
		grey: "#B5B5B5",
	},
	Black: {
		default: "#6c6e71 ",
		80: "#c4c4c4",
		60: "#06202f ",
		40: "#b9b9b9 ",
		20: "#606470",
		10: "#f0f0f0",
		5: "#ced4da",
		0: "#f2f5f7",
		"05": "#767373",
		"010": "#999595"
	},
	Success: {
		default: "rgb(37, 182, 37)",
		80: "#5ad6b0",
		60: "",
		40: "",
		20: "",
		10: "",
		5: "",
	},
	Warning: {
		default: "#1F91E3",
		80: "#CB8A0C",
		60: "",
		40: "",
		20: "",
		10: "",
		5: "#EF9E0033",
	},
	Cyon: {
		default: "#04b2d9",
		80: "#49ddff",
		60: "#67e3ff",
		40: "",
		20: "",
		10: "",
		5: "",
		0: ""
	},
	Yellow: {
		default: "#C2A21B",
		80: "#e8cf2c",
		60: "#fed42d",
		40: "",
		20: "#fff3d9",
		10: "#fef4dc",
		5: "",
	},
	Error: {
		default: "#FF3A2A",
		80: "rgb(223, 68, 68)",
		60: "#ef3434",
		40: "#ef5d5d",
		20: "",
		10: "",
		5: "",
	},
	Blue: {
		default: "rgba(16,51,83,.9647058823529412)",
		80: "#103353",
		60: "#024873",
		40: "#1976d2",
		20: "#1B84E733",
		10: "#a5b4c0",
		5: "",
		light: {
			default: "#007bff",
			80: "#2fbadd",
			60: "#67b7dc",
			40: "#024873",
			20: "",
			10: "",
			5: "",
		},
		purple: {
			default: "#6771dc",
			80: '#6794dc',
			60: "#8067dc",
			40: '#a367dc',
			20: "#c767dc",
			10: "#dc67ce",
			5: "#dc67ab",
			0: "#dc6788",
			"-5": "#3f51b5"
		},
	},
	Orange: {
		default: "#dc6967",
		80: "#dc8c67",
		60: "#dcaf67"
	}
};

const shadows = {
	smaller: " 0px 3px 6px #0176911F",
	small: "0px 4px 6px #01769131"
};

const typography = {
	fontFamily: {
		bold:
      "Montserrat-Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
	  BoldItalic:
      "Montserrat-Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		light:
      "Montserrat-light, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		medium:
      "Montserrat-Medium, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		regular:
      "Montserrat-Regular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		semiBold:
      "Montserrat-SemiBold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		extraBold:
      "Montserrat-ExtraBold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
	},
	fontWeight: {
		300: 300,
		400: 400,
		500: 500,
		600: 600,
		700: 700,
		normal: "normal",
	},
	lineHeight: {
		96: "96px",
		75: "75px",
		69: "69px",
		54: "54px",
		50: "50px",
		45: "45px",
		41: "41px",
		40: "40px",
		37: "37px",
		36: "36px",
		32: "32px",
		30: "30px",
		28: "28px",
		27: "27px",
		24: "24px",
		23: "23px",
		22: "22px",
		21: "21px",
		20: "20px",
		19.6: "19.6px",
		19: "19px",
		18: "18px",
		16: "16px",
		15: "15px",
		12: "12px",
		10: "10px",
		normal: "normal"
	},
};

const zIndex = {
	mobileStepper: 1000,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	header: 1400,
	tooltip: 1500,
};

export const fontSizes = {
	8: "8px", //10px
	10: "10px", //10px
	11: "11px", //11px
	12: "0.75rem", //12px
	13: "0.813rem", //13px
	14: "14px", //14px
	16: "1rem", //16px
	18: "1.125rem", //18px
	20: "1.25rem", //20px
	21: "21px", //22px
	22: "1.375rem", //22px
	24: "24px", //28
	30: "30px", //28
	28: "28px", //28
	35: "35px", //36
	36: "36px", //36
	40: "40px", //36
	50: "50px", //46
	55: "55px", //46
	64: "64px", //46
};

const shape = {
	borderRadius: {
		5: "5px",
		8: "8px", //10px
		10: "10px", //10px
		6: "6px", //11px
		9: "9px", //11px
		11: "11px", //11px
		12: "0.75rem", //12px
		13: "0.813rem", //13px
		14: "14px", //14px
		15: "15px", //16px
		16: "1rem", //16px
		18: "1.125rem", //18px
		20: "1.25rem", //20px
		22: "1.375rem", //22px
		24: "24px", //28
		28: "28px", //28
		32: "32px", //32
		33: "33px", //33
		36: "36px", //36
		40: "40px", //36
		46: "46px", //46
		64: "64px", //46
	},
	padding: {
		small: "10px 20px",
		smaller: "5px 10px",
		smallest: "1px 3px",
		big: "10px 30px",
	},
};

export const transition = {
	drawer: "300ms ease-in",
	notification: "300ms linear",
};
export const mediaQuery = {
	below: {
		mobile: "max-width: 360px",
		tab: "max-width: 700px",
		midDesktop: "max-width: 1000px",
		1000: "max-width: 1000px",
	},
	above: {},
};
export const theme = {
	palette,
	shadows,
	typography,
	zIndex,
	shape,
	fontSizes,
	transition,
	mediaQuery,
};
