export const load = async ({ url }) => {
  const params = Object.fromEntries(url.searchParams);
  return { params };
};
