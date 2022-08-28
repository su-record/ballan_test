import { defineStore } from 'pinia';
import { useChangeRoute } from '@/composables/useChangeRoute';
import { REG_EXR } from '@/constants';

export const useAccountStore = defineStore({
  id: 'account',
  state: () => ({
    info: null,
  }),
  getters: {
    complete(state) {
      if (!state.info) return state.info;

      const { name, email, cellular, address } = state.info;

      return {
        name,
        email,
        cellular: cellular.replace(REG_EXR.REPLACE_CELLULAR, '$1-$2-$3'),
        address: `${address.road} ${address.detail}`,
      };
    },
  },
  actions: {
    async submit(payload, routeName) {
      payload.cellular = payload.cellular.replace(REG_EXR.REPLACE_NUMBER, '');

      this.info = payload;
      await useChangeRoute(routeName);
    },
  },
});
