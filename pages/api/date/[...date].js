/** @format */

/**
 * [...date].js
 * test url: api/date/2010/3/5
 * 如果一個 API 的資料夾同時包括 [id].ts 與 [...date].js
 * 兩種 pattern 的話，當呼叫 /api/date/abc 會先匹配 /api/date/[name].js 這個 API routes
 * 而 2 個以上的參數才會匹配 [...date].js
 */
export default function handler(req, res) {
  const { date } = req.query;
  res.status(200).json({ date });
}
