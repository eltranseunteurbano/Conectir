export const actions = {
  loginGitHubRequest: 'LOGIN_GITHUB_REQUEST',
  loginRequest: 'LOGIN_REQUEST',
  registerStudentRequest: 'REGISTER_STUDENT_REQUEST',
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