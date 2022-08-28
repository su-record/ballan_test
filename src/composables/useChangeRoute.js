import router from '@/router';

export const useChangeRoute = async name => {
  await router.push({ name });
};
