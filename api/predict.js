export default function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Tangani preflight OPTIONS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    let item = "";

    try {
      item = req.body.item || "unknown";
    } catch {
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const status = Math.random() > 0.5 ? "fresh" : "rotten";

    return res.status(200).json({ item, status });
  }

  return res.status(200).send("Food Freshness API is running!");
}
