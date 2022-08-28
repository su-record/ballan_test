import InputString from '@/components/InputString.vue';
import InputAddress from '@/components/InputAddress.vue';
import InputCard from '@/components/InputCard.vue';

export default function (step = 0) {
  switch (step) {
    case 1:
      return [
        {
          label: '이름',
          component: InputString,
          type: 'text',
          model: 'name',
        },
        {
          label: '연락처',
          component: InputString,
          type: 'tel',
          model: 'cellular',
        },
        {
          label: '주소',
          component: InputAddress,
          model: 'address',
        },
      ];
    case 2:
      return [
        {
          label: '카드번호',
          component: InputCard,
          model: 'cardNo',
        },
      ];
    case 0:
    default:
      return [
        {
          label: '이메일',
          component: InputString,
          type: 'email',
          model: 'email',
        },
        {
          label: '비밀번호',
          component: InputString,
          type: 'password',
          model: 'password',
        },
        {
          label: '비밀번호 확인',
          component: InputString,
          type: 'password',
          model: 'pwRetry',
        },
      ];
  }
}
