export async function sameSiteLookup(path: string) {
  const res = await fetch(path);
  const status = res.status;
  const text = await res.text();
  return { status, text };
}
