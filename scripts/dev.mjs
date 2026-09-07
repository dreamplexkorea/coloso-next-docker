import { spawn } from "node:child_process";
import { createRequire } from "node:module";

// Keep Next.js while accepting the supervised preview's Vite-style flags.
const require = createRequire(import.meta.url);
const args = process.argv.slice(2).flatMap((argument) => {
  if (argument === "--strictPort") return [];
  if (argument === "--host") return ["--hostname"];
  if (argument.startsWith("--host=")) return [argument.replace("--host=", "--hostname=")];
  return [argument];
});
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "dev", ...args], { stdio: "inherit" });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.on("error", (error) => { console.error(error.message); process.exitCode = 1; });
child.on("exit", (code) => { process.exitCode = code ?? 1; });
