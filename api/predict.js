export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { image_url } = req.body;

  if (!image_url) {
    return res.status(400).json({ error: "image_url is required" });
  }

  const confidence = (Math.random() * 0.3 + 0.7).toFixed(2);
  const isFresh = Math.random() > 0.5;

  return res.status(200).json({
    label: isFresh ? "fresh" : "rotten",
    confidence: Number(confidence),
    image_url,
  });
}
