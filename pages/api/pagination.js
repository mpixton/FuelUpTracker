import knex from "../../knex/knex";

const handler = async (req, res) => {
  const method = req.method;

  if (method === "GET") {
    try {
      const { carId = null } = req.query;

      const [results] = await knex
        .count("*", { as: "count" })
        .from("fuelup")
        .modify((builder) => {
          if (carId !== null) {
            builder.where("car_id", carId);
          }
        });

      const { count } = results;

      return res
        .status(200)
        .json({ success: true, data: { totalItems: count } });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, data: { msg: err.message } });
    }
  }
  return res.status(405).json({ msg: "Method Not Allowed" });
};

export default handler;
