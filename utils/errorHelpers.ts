export const formatError = (err: any) => {
  let defaultError = {};
  try {
    return err?.response?.data || defaultError;
  } catch (error) {
    return defaultError;
  }
};
