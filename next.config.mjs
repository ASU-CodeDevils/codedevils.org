import { env } from "./src/env/server.mjs";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  
  // automatically create a standalone folder that copies only the necessary files for a production deployment including select files in node_modules
  // Learn more: https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone', 
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});
