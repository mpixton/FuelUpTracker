import knex from "../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const { pageNum = 0, carId, limit = 20 } = req.query;

    try {
      const fuelUps = await knex
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
        .offset((parseInt(pageNum, 10) - 1) * limit)
        .limit(limit)
        .orderBy("f.odometer", "desc", "c.name")
        .modify((builder) => {
          if (carId) {
            builder.where("f.car_id", carId);
          }
        });

      return res
        .status(200)
        .json({ success: true, data: { fuelUps: fuelUps } });
    } catch (err) {
      res.send(400).json({ success: false, data: { msg: err.message } });
    }
  }
  if (method === "POST") {
    const { body } = req;

    console.log(body);

    try {
      await knex.insert(body).into("fuelup").returning("fuelup_id");
      return res.status(201).json({ success: true, data: { msg: "Created" } });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, data: { msg: err.message } });
    }
  }
  return res.status(405).json({ msg: "Method Not Allowed" });
};

export default handler;
