import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      isr: {
        expiration: 60,
        allowQuery: "*",
      },
    }),
  },
};

export default config;
