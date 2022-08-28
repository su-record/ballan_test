import { REG_EXR } from '@/constants';
import { validation, validationCard, cardSum } from '@/utils';

export default function (formData) {
  return {
    email: validation(REG_EXR.EMAIL, formData.email),
    password: validation(REG_EXR.PASSWORD, formData.password),
    pwRetry: formData.password === formData.pwRetry,
    name: validation(REG_EXR.NAME, formData.name),
    cellular: validation(REG_EXR.CELLULAR, formData.cellular),
    address: !!formData.address.road && !!formData.address.detail,
    cardNo: !!formData.cardNo && validationCard(cardSum, formData.cardNo),
  };
}
