import knex from "../../knex/knex";

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    await knex.insert(req.body).into("car")
    return res.status(201).json({ msg: "Created" });
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
