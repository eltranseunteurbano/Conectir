export const actions = {
  loginGitHubRequest: 'LOGIN_GITHUB_REQUEST',
  loginRequest: 'LOGIN_REQUEST',
  registerStudentRequest: 'REGISTER_STUDENT_REQUEST',


  //Unidad del servidor
  checkStepCurrent: 'CHECK_STEP_CURRRENT',
  isComprobateLogin: "IS_COMPROBATE_LOGIN",
  setUserInformation: "SET_USER_INFORMATION",
  goToUrl: "GO_TO_URL"
}


export const loginGitHubRequest = payload => ({
  type: actions.loginGitHubRequest,
  payload,
});

export const loginRequest = payload => ({
  type: actions.loginRequest,
  payload,
});

export const registerStudentRequest = payload => ({
  type: actions.registerStudentRequest,
  payload,
})


export const checkStepCurrent = payload => ({
  type: actions.checkStepCurrent,
  payload,
});


export const isComprobateLogin = payload => ({
  type: actions.isComprobateLogin,
  payload,
});

export const setUserInformation = payload => ({
  type: actions.setUserInformation,
  payload,
});

export const goToUrl = payload => ({
  type: actions.goToUrl,
  payload,
});