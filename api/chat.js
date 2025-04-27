export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');  // ⭐️ 開放所有網域可以呼叫
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end(); // CORS 預檢請求直接結束
    }
  
    res.status(200).json({ message: "Hello from Vercel backend!" });
  }
  