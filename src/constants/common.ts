export const SERVER_STATUS_CODE = Object.freeze({
  notFound: 404,
  badRequest: 400,
  forbidden: 403,
  authenticationDenied: 401,
  serverError: 500,
  success: 200,
});

export const ALERT_MESSAGES = Object.freeze({
  // not found
  dataNoFount: "Data not found",
  searchNotFount: "Sorry, there are no matches. Try a new search?",
  // generic
  submittingLoading: "Please wait...",
  submittingSuccessMassage: "Detail Added Successfully",
  allFieldsRequired: "Please fill all required fields",
  NA: "N/A",
  // error
  fallbackError: "Something went wrong, Please try again later!",
  networkError: "Please check your internet connection!",
  timeOutError: "Your connection taking too long to get data!",
});
