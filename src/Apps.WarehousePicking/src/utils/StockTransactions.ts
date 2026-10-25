/** A failure as the worker should read it: the server's message without the "Error: " wrapper. */
export function errorText(error: unknown): string {
  return String(error).replace(/^Error:\s*/, "");
}
