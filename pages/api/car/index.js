import knex from "../../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const cars = await knex.select().from("car");
      return res.status(200).json({ success: true, data: { cars: cars } });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, data: { msg: err.message } });
    }
  }
  if (method === "POST") {
    try {
      await knex.insert(req.body).into("car");
      return res.status(201).json({ sucess: true, data: { msg: "Created" } });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, data: { msg: err.message } });
    }
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
