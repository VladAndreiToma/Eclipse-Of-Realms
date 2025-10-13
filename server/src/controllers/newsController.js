import News from "../models/News.js";
import redisService from "../utils/redisClient.js";

// Creează un news item nou
export const createNews = async (req, res) => {
  try {
    const newsItem = new News(req.body);
    await newsItem.save();
    res.status(201).json(newsItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get news cu sort order
export const getNews = async (req, res) => {
  try {
    const category = req.query.category;
    const sortOrder = req.query.sort || "latest"; // default latest

    console.log("Requested category:", category);
    console.log("Requested sortOrder:", sortOrder);

    const filter = { visible: true };
    if (category && category !== "all") filter.category = category;

    // sort: -1 pentru latest, 1 pentru oldest
    const sort = { createdAt: sortOrder === "latest" ? -1 : 1 };
    console.log("Mongo filter:", filter, "Sort:", sort);

    const news = await News.find(filter).sort(sort);
    console.log("Found news:", news.length);

    res.json(news);
  } catch (err) {
    console.error("Error in getNews:", err);
    res.status(500).json({ message: err.message });
  }
};

