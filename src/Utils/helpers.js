

export const isAuthenticated = () => {
    const userDetails = JSON.parse(localStorage.getItem('user_details'))
    if(userDetails?.token){
        return true
    }
    return false
}

export const validateEmail = (value = "") => {
    const errorObject = {
      isError: false,
      errorMessage: "",
    };
    
    if (value) {
      if (value.replace(/[^@]/g, "").length > 1) {
        errorObject.isError = true;
        errorObject.errorMessage = "Your e-mail address Contains too many @ characters";
      } else if (value.match(/[~!#$^&*\s(=[}{)\]<>,/:;'"|\\`]/gim)) {
        errorObject.isError = true;
        errorObject.errorMessage = "Your e-mail address contains invalid characters";
      } else if (!value.match(/[A-Z0-9._%+-]+@/gim)) {
        errorObject.isError = true;
        errorObject.errorMessage = "An at (@) sign is missing in your Email Address";
      } else if (!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\./gim)) {
        errorObject.isError = true;
        errorObject.errorMessage =
        "The Domain in your e-mail address is missing a period";
      } else if(value.match(/(([A-Z0-9._%+-]+@[A-Z0-9-]\.[.]+\.[.])|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[.]))/gim)) {
        errorObject.isError = true;
        errorObject.errorMessage =
        "The Domain in your e-mail address has consecutive periods";
      } else if(!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim)) {
        errorObject.isError = true;
        errorObject.errorMessage =
        "The Domain in your e-mail address is missing a top level domain";
      }
    }
  
    return errorObject;
  }