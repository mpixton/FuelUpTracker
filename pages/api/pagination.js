import knex from "../../knex/knex";

const handler = async (req, res) => {
  const method = req.method;

  if (method === "GET") {
    const results = await knex.count("fuelup_id").from("fuelup");

    const { count } = results[0];

    console.log(results);
    console.log(count);

    return res.status(200).json({ totalItems: count });
  }
  return res.status(405).json({ msg: "Method Not Allowed" });
};

export default handler;
