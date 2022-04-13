import knex from "../../knex/knex";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    // console.log(req.query);
    const { pageNum } = req.query;
    // console.log(pageNum);
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
      .offset(pageNum * 20)
      .limit(20);

    return res.status(200).json({ data: fuelUps });
  }
  if (method === "POST") {
    const { body } = req;
    console.log(body);

    await knex.insert(body).into("fuelup").returning("fuelup_id");
    return res.status(201).json({ msg: "Created" });
  }
  return res.status(405).json({ msg: "Method Not Allowed" });
};

export default handler;
