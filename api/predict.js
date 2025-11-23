export default function handler(req, res) {
  if (req.method === "POST") {
    const item = req.body.item || "unknown";
    const status = item.toLowerCase().includes("apple") ? "fresh" : "rotten";

    res.status(200).json({ item, status });
  } else {
    res.status(200).send("Food Freshness API is running!");
  }
}
