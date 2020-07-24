export const actions = {
  loginGitHubRequest: 'LOGIN_GITHUB_REQUEST',
  loginRequest: 'LOGIN_REQUEST',
  registerStudentRequest: 'REGISTER_STUDENT_REQUEST',


  //Unidad del servidor
  checkStepCurrent: 'CHECK_STEP_CURRRENT',
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