import knex from "../../knex/knex";

const handler = async (req, res) => {
  const method = req.method;

  if (method === "GET") {
    // console.log(req.query);
    const { pageNum } = req.query;
    // console.log(pageNum);
    const fuelUps = await knex
      .select()
      .from("fuelup")
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
