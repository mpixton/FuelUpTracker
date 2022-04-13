import knex from "../../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;
    const [fuelUp] = await knex
      .select(
        "f.fuelup_id AS fuelUpId",
        "f.trip",
        "f.gallons",
        "f.price",
        "f.total",
        "f.odometer",
        "f.vendor",
        "f.city",
        "f.state",
        "f.date",
        "f.car_id AS carId",
        "c.name AS car"
      )
      .from("fuelup AS f")
      .join("car AS c", "f.car_id", "c.car_id")
      .where({ fuelUp_Id: id });
    return res.status(200).json({ success: true, data: { fuelUp: fuelUp } });
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
