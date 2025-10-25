export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Nếu đường dẫn được yêu cầu KHÔNG PHẢI là chính tệp launching.json...
  if (pathname !== '/good/launching.json') {
    // ...thì lấy nội dung của tệp launching.json và trả về làm phản hồi.
    return context.next('/good/launching.json');
  }

  // Nếu yêu cầu là dành cho chính tệp /good/launching.json,
  // hãy để Cloudflare xử lý nó một cách bình thường.
  return context.next();
}