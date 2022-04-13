import knex from "../../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;
    const fuelUps = await knex
      .select(
        "fuelup_id AS fuelUpId",
        "trip",
        "gallons",
        "price",
        "total",
        "odometer",
        "vendor",
        "city",
        "state",
        "date",
        "car_id AS carId"
      )
      .from("fuelup")
      .where({ car_id: id });
    return res.status(200).json({ success: true, data: { fuelUps: fuelUps } });
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
