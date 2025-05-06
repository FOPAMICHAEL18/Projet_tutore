export const useCounterStore = defineStore("counter", () => {
    const connect = ref(true);
  
    return {
      connect,
    };
  });
  