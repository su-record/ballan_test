export const REG_EXR = {
  EMAIL:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  CELLULAR: /^01([0|1|6|7|8|9])(-|\s)?(\d{3,4})(-|\s)?(\d{4})$/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/,
  NAME: /([가-힣]{2,}|[a-zA-Z]{3,})$/,
  NUMBER: /\d+$/,
  REPLACE_NUMBER: /[^0-9]/g,
  REPLACE_CELLULAR: /^(\d{2,3})(\d{3,4})(\d{4})$/,
};
