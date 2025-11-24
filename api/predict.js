export default function handler(req, res) {
  if (req.method === "POST") {
    let item = "";

    try {
      item = req.body.item || "unknown";
    } catch {
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    // RANDOM yang lebih bervariasi
    const r = Math.random();
    let status = "fresh";

    if (r < 0.3) {
      status = "rotten"; // 30%
    } else if (r < 0.6) {
      status = "fresh";  // 30%
    } else {
      status = "ok";     // 40% opsional status baru
    }

    return res.status(200).json({ item, status });
  }

  return res.status(200).send("Food Freshness API is running!");
}
