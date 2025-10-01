export type TruncateOptions = {
  suffix?: string;
  wordSafe?: boolean;
};

const truncate = (
  text: string,
  maxLength: number = 20,
  options: TruncateOptions = {}
): string => {
  if (!text) return '';

  const { suffix = '...', wordSafe = true } = options;

  const chars = Array.from(text);

  if (chars.length <= maxLength) return text;

  const suffixLen = Array.from(suffix).length;
  const cutLen = Math.max(0, maxLength - suffixLen);

  if (cutLen === 0) {
    return suffix.slice(0, maxLength);
  }

  let sliced = chars.slice(0, cutLen).join('');

  if (wordSafe) {
    const lastSpace = sliced.lastIndexOf(' ');
    if (lastSpace > 0) {
      sliced = sliced.slice(0, lastSpace).trimEnd();
    }
  }

  return sliced + suffix;
};

export default truncate;
