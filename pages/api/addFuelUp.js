const handler = (req, res) => {
  const method = req.method;

  if (method === "GET") {
    return res.status(200).json({ msg: "Found" });
  }
  if (method === "POST") {
    const { body } = req;
    console.log(body);
    return res.status(200).json({ msg: "Created" });
  }
  return res.status(404).json({ msg: "Not Authorized" });
};

export default handler;
