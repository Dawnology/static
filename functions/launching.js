// File: functions/launching.js

export async function onRequest(context) {
  // 1. Đây là nội dung JSON gốc của bạn
  const baseJsonData = {
    "data": [
      {
        "app_package": "",
        "campaign_id": "UsNZPm",
        "horizontal": {
          "background": "https://blogger.googleusercontent.com/img/a/AVvXsEjK0o4sBrERBvwy8Vq_iRPAoFtDi4ze-F3XFbneBJ76aBOtUO5KQ8syMvsa6BMZ-WVRrHynCmRxetM1c8PZVfm0rGd9IepdbNgpvQaMRaZ-N5-D06osmja8Xzi2yFArDhpTviJ7lKquY4XDblGwh25vqft67JmbG-t_JQ-EDo9SWqG8jtid9Koy2k6DxcMv",
          "button": "https://blogger.googleusercontent.com/img/a/AVvXsEjK0o4sBrERBvwy8Vq_iRPAoFtDi4ze-F3XFbneBJ76aBOtUO5KQ8syMvsa6BMZ-WVRrHynCmRxetM1c8PZVfm0rGd9IepdbNgpvQaMRaZ-N5-D06osmja8Xzi2yFArDhpTviJ7lKquY4XDblGwh25vqft67JmbG-t_JQ-EDo9SWqG8jtid9Koy2k6DxcMv",
          "click_height": 15,
          "click_offset_x": 38,
          "click_offset_y": 77,
          "click_width": 23,
          "hover": "https://blogger.googleusercontent.com/img/a/AVvXsEjK0o4sBrERBvwy8Vq_iRPAoFtDi4ze-F3XFbneBJ76aBOtUO5KQ8syMvsa6BMZ-WVRrHynCmRxetM1c8PZVfm0rGd9IepdbNgpvQaMRaZ-N5-D06osmja8Xzi2yFArDhpTviJ7lKquY4XDblGwh25vqft67JmbG-t_JQ-EDo9SWqG8jtid9Koy2k6DxcMv"
        },
        "link": "mumu://store/appdetail/23967?mumuresourcename=绯色回响&from=启动广告&tab=2&download=1&fromid=UsNZPm",
        "link_type": "internal_browser",
        "vertical": {
          "background": "https://g.fp.ps.netease.com/nemu/file/6499591331f9b64a607fe466eidrbQ8Z05",
          "button": "https://g.fp.ps.netease.com/nemu/file/6499591331f9b64a607fe466eidrbQ8Z05",
          "click_height": 0,
          "click_offset_x": 0,
          "click_offset_y": 0,
          "click_width": 0,
          "hover": "https://g.fp.ps.netease.com/nemu/file/6499591331f9b64a607fe466eidrbQ8Z05"
        }
      }
    ],
    "errcode": 100,
    "errmsg": "ok"
  };

  // 2. Tính toán padding để đạt Content-Length = 5192
  const targetSize = 5192;
  const initialJsonString = JSON.stringify(baseJsonData);
  // Kích thước của chuỗi JSON ban đầu (trừ dấu } cuối cùng)
  const initialSize = new TextEncoder().encode(initialJsonString.slice(0, -1)).length; 
  // Kích thước của cú pháp thêm vào: ',"padding":""}'
  const syntaxSize = new TextEncoder().encode(',"padding":""}').length; 
  // Số byte cần thêm vào
  const paddingSize = targetSize - initialSize - syntaxSize;

  if (paddingSize > 0) {
    baseJsonData.padding = ' '.repeat(paddingSize);
  }

  // 3. Chuyển đổi đối tượng JSON cuối cùng thành chuỗi
  const responseBody = JSON.stringify(baseJsonData);

  // 4. Thiết lập tất cả các header giả mạo
  const customHeaders = {
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=0, must-revalidate',
    'ETag': '"94da76618494f6a50d14fe46c45387e6"',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'x-content-type-options': 'nosniff',
    'x-robots-tag': 'noindex',
    'Vary': 'accept-encoding',
    'Report-To': '{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1GgWNnF3dDmr9pjX6VjLwEVlm0JrSY44%2F33xVNlbWlCGmKWDscdhQA0e5oegv8EjWzawgxT6ntaowp5%2FVrwWwwCjSK3MDXQFmWJCAKyiQKr9lpnjyr%2FV6ppSR7zO"}]}',
    'Nel': '{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}',
    
    // Các header này sẽ do Cloudflare tự động đặt và ghi đè
    'Server': 'cloudflare', // Sẽ bị ghi đè thành 'cloudflare'
    'CF-RAY': '99483b5299deaeb8-NRT' // Không thể giả mạo, sẽ được tạo mới cho mỗi yêu cầu
  };

  // 5. Trả về đối tượng Response hoàn chỉnh
  return new Response(responseBody, {
    status: 200,
    headers: customHeaders
  });
}
