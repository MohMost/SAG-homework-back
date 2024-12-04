const searchBooks = async (req, res) => {
  try {
    const query = req.query.q || "";
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching books", error: error.message });
  }
};

export default searchBooks;
