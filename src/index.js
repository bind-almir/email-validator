const isValidEmail = (email) => {
  const emailRegEx = /^(?:[\w!#$%&'*+\-/=?^`{|}~]+\.)*[\w!#$%&'*+\-/=?^`{|}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  return emailRegEx.test(email);
};

module.exports = {
  isValidEmail,
};