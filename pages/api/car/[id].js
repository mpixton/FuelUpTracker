import knex from "../../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const { id, limit = 10 } = req.query;
      if (id === undefined) {
        return res.send(404).json({
          success: false,
          data: { msg: "Not All Parameters Provided" },
        });
      }
      const [car] = await knex
        .select("name", "make", "model", "year")
        .from("car");
      return res.status(200).json({ success: true, data: { car: car } });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, data: { msg: err.message } });
    }
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
