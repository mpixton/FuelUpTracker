import knex from "../../../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;
    const [stats] = await knex
      .select("f.car_id AS carId")
      .avg("f.trip AS avgTrip")
      .avg("f.gallons AS avgGallons")
      .avg("f.price AS avgPrice")
      .avg("f.total AS avgTotal")
      .sum("f.trip AS totalTrip")
      .sum("f.gallons AS totalGallons")
      .sum("f.total AS totalTotal")
      .from("fuelup AS f")
      .groupBy("f.car_id")
      .where("f.car_id", id);
    return res.status(200).json({ success: true, data: { stats: stats } });
  }
  return res.status(403).json({ msg: "Method Not Allowed" });
};

export default handler;
