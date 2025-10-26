// File: functions/launching.js

export async function onRequest(context) {
  // 1. Đây là nội dung JSON bạn đã cung cấp
  const jsonData = {
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

  // 2. Chuyển đổi đối tượng JavaScript thành chuỗi JSON để gửi đi
  const responseBody = JSON.stringify(jsonData);

  // 3. Thiết lập các header giả mạo
  const customHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Connection': 'close',
    'X-Trace-ID': 'a8b6086f3802da0c8459eec9e4d00b1b',
    'ntes-trace-id': '61e6fb24eb8d089d:61e6fb24eb8d089d:0:0',
    // Header 'Server' sẽ bị Cloudflare ghi đè
    'Server': 'nginx' 
  };

  // 4. Trả về một đối tượng Response hoàn chỉnh
  return new Response(responseBody, {
    status: 200,
    headers: customHeaders
  });
}