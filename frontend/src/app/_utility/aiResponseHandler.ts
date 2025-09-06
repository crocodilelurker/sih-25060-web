export const cleanAIResponse = (rawResponse: string): string => {
  let cleaned = rawResponse.replace(/#{1,3}\s+(.+?)\n/g, (match, p1) => {
    return `<p><strong>${p1}</strong></p>`;
  });
  cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  cleaned = cleaned.replace(
    /(-|\*|\+)(\s+)([^$]+)/g,
    (match, bullet, space, content) => {
      return `<li>${content.trim()}</li>`;
    }
  );
  cleaned = cleaned.replace(/<li>/g, '<ul><li>');
  cleaned = cleaned.replace(/<\/li>/g, '</li></ul>');
  cleaned = cleaned.replace(/(\d+)\.\s+(.+?)(?=\n\s*\d+\.|\n\n)/g, (match, num, content) => {
    return `<ol><li>${content.trim()}</li>`;
  });
  cleaned = cleaned.replace(/\n{2,}/g, '\n\n');
  cleaned = cleaned.replace(/\n/g, '<br>');
  cleaned = cleaned.replace(/<br><br>/g, '<br>');
  return cleaned;
};