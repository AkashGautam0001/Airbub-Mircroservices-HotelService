import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
  correlationId: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>(); // created a instance

export const getCorreclationId = () => {
  const asyncStore = asyncLocalStorage.getStore();
  return (
    asyncStore?.correlationId || "Unknown-error-while-creating-correlation-id"
  );
};
