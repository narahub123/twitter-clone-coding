import type { RootState } from "@app";

const selectIsLoading = (state: RootState) => state.loading.isLoading;

export { selectIsLoading };
