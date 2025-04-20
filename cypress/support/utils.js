
export const generateDynamicEmail = () => {
  const timestamp = Date.now();
  return `user_${timestamp}@test.com`;
};
