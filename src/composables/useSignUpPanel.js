import InputString from '@/components/InputString.vue';
import InputAddress from '@/components/InputAddress.vue';
import InputCard from '@/components/InputCard.vue';

export const useSignUpPanel = (step = 0) => {
  console.log('???? useSignPanel step', step);
  switch (step) {
    case 1:
      return [
        {
          label: '이름',
          component: InputString,
          type: 'text',
        },
        {
          label: '연락처',
          component: InputString,
          type: 'tel',
        },
        {
          label: '주소',
          component: InputAddress,
        },
      ];
    case 2:
      return [
        {
          label: '카드번호',
          component: InputCard,
        },
      ];
    case 0:
    default:
      return [
        {
          label: '이메일',
          component: InputString,
          type: 'email',
        },
        {
          label: '비밀번호',
          component: InputString,
          type: 'password',
        },
        {
          label: '비밀번호 확인',
          component: InputString,
          type: 'password',
        },
      ];
  }
};
