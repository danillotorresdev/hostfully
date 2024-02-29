export function limitCharacters(text: string, limit: number): string {
  if (text.length > limit) {
    return `${text.slice(0, limit)}...`;
  }

  return text;
}
