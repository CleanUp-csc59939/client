/**
 *
 * Authentication Head
 * @method
 * @return  {JSON}            Returns User Auth token
 */

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { 'x-access-token': user.token };
  }
  return {};
};
export default authHeader;
