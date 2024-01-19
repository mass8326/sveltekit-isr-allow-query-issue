export const load = async ({ url }) => {
  const time = Date.now();
  const params = Object.fromEntries(url.searchParams);
  return { time, params };
};
