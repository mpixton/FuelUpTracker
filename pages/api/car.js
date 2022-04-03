import knex from "../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const cars = await knex.select().from("car");
    return res.status(200).json({ cars: cars });
  }
  if (method === "POST") {
    await knex.insert(req.body).into("car");
    return res.status(201).json({ msg: "Created" });
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
