import {
  CHANGE_AUTH,
  FETCH_USERS
} from './types';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload:isLoggedIn
  }
}

export function fetchUsers(users, newUsers) {
  return {
    type: CHANGE_AUTH,
    users,
    newUsers
  }
}
