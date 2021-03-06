/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("fuelup").del();
  await knex.schema.alterTable("fuelup", (table) =>
    table.integer("car_id").references("car_id").inTable("car").alter()
  );
  await knex("fuelup").insert([
    {
      fuelup_id: 0,
      trip: 263.1,
      gallons: 11.987,
      price: 3.552,
      total: 42.58,
      odometer: 50263,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-04-19T00:00:00.000Z",
    },
    {
      fuelup_id: 1,
      trip: 301.7,
      gallons: 16.486,
      price: 4.577,
      total: 75.46,
      odometer: 50565,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-04-28T00:00:00.000Z",
    },
    {
      fuelup_id: 2,
      trip: 263.6,
      gallons: 19.049,
      price: 3.787,
      total: 72.14,
      odometer: 50829,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-05-05T00:00:00.000Z",
    },
    {
      fuelup_id: 3,
      trip: 134.6,
      gallons: 12.351,
      price: 4.426,
      total: 54.67,
      odometer: 50964,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 0,
      date: "2020-05-23T00:00:00.000Z",
    },
    {
      fuelup_id: 4,
      trip: 305.5,
      gallons: 17.313,
      price: 2.487,
      total: 43.06,
      odometer: 51270,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-06-06T00:00:00.000Z",
    },
    {
      fuelup_id: 5,
      trip: 312.3,
      gallons: 12.789,
      price: 2.602,
      total: 33.28,
      odometer: 51582,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 0,
      date: "2020-06-21T00:00:00.000Z",
    },
    {
      fuelup_id: 6,
      trip: 148.8,
      gallons: 11.266,
      price: 5.019,
      total: 56.54,
      odometer: 51731,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 0,
      date: "2020-07-06T00:00:00.000Z",
    },
    {
      fuelup_id: 7,
      trip: 287.7,
      gallons: 17.581,
      price: 4.88,
      total: 85.8,
      odometer: 52019,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 0,
      date: "2020-07-13T00:00:00.000Z",
    },
    {
      fuelup_id: 8,
      trip: 200.2,
      gallons: 14.583,
      price: 3.957,
      total: 57.7,
      odometer: 52219,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-07-19T00:00:00.000Z",
    },
    {
      fuelup_id: 9,
      trip: 148.1,
      gallons: 15.908,
      price: 4.332,
      total: 68.91,
      odometer: 52367,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-08-05T00:00:00.000Z",
    },
    {
      fuelup_id: 10,
      trip: 308.6,
      gallons: 19.261,
      price: 2.617,
      total: 50.41,
      odometer: 52676,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-08-17T00:00:00.000Z",
    },
    {
      fuelup_id: 11,
      trip: 160.3,
      gallons: 5.611,
      price: 3.838,
      total: 21.54,
      odometer: 52836,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-08-31T00:00:00.000Z",
    },
    {
      fuelup_id: 12,
      trip: 169.2,
      gallons: 14.084,
      price: 2.666,
      total: 37.55,
      odometer: 53005,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-09-08T00:00:00.000Z",
    },
    {
      fuelup_id: 13,
      trip: 155.8,
      gallons: 16.374,
      price: 3.614,
      total: 59.18,
      odometer: 53161,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-09-19T00:00:00.000Z",
    },
    {
      fuelup_id: 14,
      trip: 305.0,
      gallons: 5.554,
      price: 4.765,
      total: 26.46,
      odometer: 53466,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-10-06T00:00:00.000Z",
    },
    {
      fuelup_id: 15,
      trip: 305.2,
      gallons: 7.954,
      price: 4.148,
      total: 32.99,
      odometer: 53771,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-10-15T00:00:00.000Z",
    },
    {
      fuelup_id: 16,
      trip: 157.1,
      gallons: 9.735,
      price: 3.114,
      total: 30.31,
      odometer: 53928,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-10-29T00:00:00.000Z",
    },
    {
      fuelup_id: 17,
      trip: 129.2,
      gallons: 9.637,
      price: 4.298,
      total: 41.42,
      odometer: 54057,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 0,
      date: "2020-11-05T00:00:00.000Z",
    },
    {
      fuelup_id: 18,
      trip: 178.7,
      gallons: 12.743,
      price: 3.744,
      total: 47.71,
      odometer: 54236,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 0,
      date: "2020-11-13T00:00:00.000Z",
    },
    {
      fuelup_id: 19,
      trip: 81.1,
      gallons: 11.436,
      price: 4.147,
      total: 47.43,
      odometer: 54317,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 0,
      date: "2020-11-19T00:00:00.000Z",
    },
    {
      fuelup_id: 20,
      trip: 123.7,
      gallons: 7.106,
      price: 2.347,
      total: 16.68,
      odometer: 50124,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 1,
      date: "2020-04-18T00:00:00.000Z",
    },
    {
      fuelup_id: 21,
      trip: 98.1,
      gallons: 19.757,
      price: 3.729,
      total: 73.67,
      odometer: 50222,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-04-28T00:00:00.000Z",
    },
    {
      fuelup_id: 22,
      trip: 94.0,
      gallons: 19.247,
      price: 2.95,
      total: 56.78,
      odometer: 50316,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 1,
      date: "2020-05-14T00:00:00.000Z",
    },
    {
      fuelup_id: 23,
      trip: 154.7,
      gallons: 8.964,
      price: 3.764,
      total: 33.74,
      odometer: 50471,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-05-23T00:00:00.000Z",
    },
    {
      fuelup_id: 24,
      trip: 200.7,
      gallons: 11.492,
      price: 4.017,
      total: 46.16,
      odometer: 50672,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-06-04T00:00:00.000Z",
    },
    {
      fuelup_id: 25,
      trip: 210.2,
      gallons: 15.196,
      price: 3.684,
      total: 55.98,
      odometer: 50882,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 1,
      date: "2020-06-17T00:00:00.000Z",
    },
    {
      fuelup_id: 26,
      trip: 90.3,
      gallons: 11.391,
      price: 4.949,
      total: 56.37,
      odometer: 50972,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-06-23T00:00:00.000Z",
    },
    {
      fuelup_id: 27,
      trip: 81.5,
      gallons: 19.019,
      price: 3.02,
      total: 57.44,
      odometer: 51054,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-07-07T00:00:00.000Z",
    },
    {
      fuelup_id: 28,
      trip: 285.3,
      gallons: 11.275,
      price: 5.03,
      total: 56.71,
      odometer: 51339,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-07-13T00:00:00.000Z",
    },
    {
      fuelup_id: 29,
      trip: 244.8,
      gallons: 8.657,
      price: 3.816,
      total: 33.04,
      odometer: 51584,
      city: "Detroit",
      state: "Michigan",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-08-01T00:00:00.000Z",
    },
    {
      fuelup_id: 30,
      trip: 191.3,
      gallons: 12.224,
      price: 2.895,
      total: 35.39,
      odometer: 51775,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-08-14T00:00:00.000Z",
    },
    {
      fuelup_id: 31,
      trip: 186.7,
      gallons: 16.445,
      price: 2.51,
      total: 41.28,
      odometer: 51962,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-08-27T00:00:00.000Z",
    },
    {
      fuelup_id: 32,
      trip: 216.6,
      gallons: 13.322,
      price: 3.976,
      total: 52.97,
      odometer: 52179,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-09-10T00:00:00.000Z",
    },
    {
      fuelup_id: 33,
      trip: 129.1,
      gallons: 12.467,
      price: 2.452,
      total: 30.57,
      odometer: 52308,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-09-16T00:00:00.000Z",
    },
    {
      fuelup_id: 34,
      trip: 236.8,
      gallons: 10.849,
      price: 3.279,
      total: 35.57,
      odometer: 52545,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-10-05T00:00:00.000Z",
    },
    {
      fuelup_id: 35,
      trip: 135.1,
      gallons: 16.869,
      price: 2.961,
      total: 49.95,
      odometer: 52680,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-10-16T00:00:00.000Z",
    },
    {
      fuelup_id: 36,
      trip: 292.5,
      gallons: 17.853,
      price: 4.078,
      total: 72.8,
      odometer: 52972,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-11-02T00:00:00.000Z",
    },
    {
      fuelup_id: 37,
      trip: 297.7,
      gallons: 7.986,
      price: 3.558,
      total: 28.41,
      odometer: 53270,
      city: "Los Angeles",
      state: "California",
      vendor: "Costco",
      car_id: 1,
      date: "2020-11-20T00:00:00.000Z",
    },
    {
      fuelup_id: 38,
      trip: 78.3,
      gallons: 18.464,
      price: 4.668,
      total: 86.19,
      odometer: 53348,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 1,
      date: "2020-12-02T00:00:00.000Z",
    },
    {
      fuelup_id: 39,
      trip: 120.5,
      gallons: 18.752,
      price: 2.927,
      total: 54.89,
      odometer: 53468,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 1,
      date: "2020-12-12T00:00:00.000Z",
    },
    {
      fuelup_id: 40,
      trip: 139.2,
      gallons: 17.512,
      price: 3.111,
      total: 54.48,
      odometer: 50139,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 2,
      date: "2020-05-02T00:00:00.000Z",
    },
    {
      fuelup_id: 41,
      trip: 217.0,
      gallons: 6.381,
      price: 4.638,
      total: 29.6,
      odometer: 50356,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-05-18T00:00:00.000Z",
    },
    {
      fuelup_id: 42,
      trip: 251.9,
      gallons: 13.834,
      price: 2.697,
      total: 37.31,
      odometer: 50608,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 2,
      date: "2020-06-05T00:00:00.000Z",
    },
    {
      fuelup_id: 43,
      trip: 292.4,
      gallons: 5.934,
      price: 4.322,
      total: 25.65,
      odometer: 50900,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 2,
      date: "2020-06-24T00:00:00.000Z",
    },
    {
      fuelup_id: 44,
      trip: 163.2,
      gallons: 18.311,
      price: 2.461,
      total: 45.06,
      odometer: 51063,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-07-10T00:00:00.000Z",
    },
    {
      fuelup_id: 45,
      trip: 283.5,
      gallons: 6.678,
      price: 4.32,
      total: 28.85,
      odometer: 51346,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-07-16T00:00:00.000Z",
    },
    {
      fuelup_id: 46,
      trip: 179.8,
      gallons: 5.119,
      price: 4.69,
      total: 24.01,
      odometer: 51526,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 2,
      date: "2020-08-04T00:00:00.000Z",
    },
    {
      fuelup_id: 47,
      trip: 91.6,
      gallons: 7.544,
      price: 2.709,
      total: 20.44,
      odometer: 51618,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-08-10T00:00:00.000Z",
    },
    {
      fuelup_id: 48,
      trip: 142.7,
      gallons: 13.832,
      price: 3.591,
      total: 49.67,
      odometer: 51761,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 2,
      date: "2020-08-20T00:00:00.000Z",
    },
    {
      fuelup_id: 49,
      trip: 89.8,
      gallons: 19.552,
      price: 2.852,
      total: 55.76,
      odometer: 51851,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-08-31T00:00:00.000Z",
    },
    {
      fuelup_id: 50,
      trip: 223.8,
      gallons: 9.528,
      price: 4.705,
      total: 44.83,
      odometer: 52075,
      city: "Los Angeles",
      state: "California",
      vendor: "Costco",
      car_id: 2,
      date: "2020-09-10T00:00:00.000Z",
    },
    {
      fuelup_id: 51,
      trip: 129.6,
      gallons: 12.173,
      price: 2.992,
      total: 36.42,
      odometer: 52205,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-09-29T00:00:00.000Z",
    },
    {
      fuelup_id: 52,
      trip: 253.4,
      gallons: 13.944,
      price: 2.916,
      total: 40.66,
      odometer: 52458,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 2,
      date: "2020-10-12T00:00:00.000Z",
    },
    {
      fuelup_id: 53,
      trip: 95.8,
      gallons: 8.737,
      price: 5.096,
      total: 44.52,
      odometer: 52554,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-10-21T00:00:00.000Z",
    },
    {
      fuelup_id: 54,
      trip: 310.6,
      gallons: 14.045,
      price: 4.222,
      total: 59.3,
      odometer: 52865,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-10-26T00:00:00.000Z",
    },
    {
      fuelup_id: 55,
      trip: 264.4,
      gallons: 7.782,
      price: 4.808,
      total: 37.42,
      odometer: 53129,
      city: "Detroit",
      state: "Michigan",
      vendor: "Dinoco",
      car_id: 2,
      date: "2020-11-02T00:00:00.000Z",
    },
    {
      fuelup_id: 56,
      trip: 153.8,
      gallons: 7.834,
      price: 4.169,
      total: 32.66,
      odometer: 53283,
      city: "Los Angeles",
      state: "California",
      vendor: "Costco",
      car_id: 2,
      date: "2020-11-10T00:00:00.000Z",
    },
    {
      fuelup_id: 57,
      trip: 131.5,
      gallons: 10.499,
      price: 4.754,
      total: 49.91,
      odometer: 53414,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 2,
      date: "2020-11-16T00:00:00.000Z",
    },
    {
      fuelup_id: 58,
      trip: 164.5,
      gallons: 7.835,
      price: 4.567,
      total: 35.78,
      odometer: 53578,
      city: "Los Angeles",
      state: "California",
      vendor: "Costco",
      car_id: 2,
      date: "2020-11-28T00:00:00.000Z",
    },
    {
      fuelup_id: 59,
      trip: 252.9,
      gallons: 11.042,
      price: 3.101,
      total: 34.24,
      odometer: 53831,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Flo's V8 Cafe",
      car_id: 2,
      date: "2020-12-04T00:00:00.000Z",
    },
    {
      fuelup_id: 60,
      trip: 263.0,
      gallons: 10.857,
      price: 2.969,
      total: 32.23,
      odometer: 50263,
      city: "Detroit",
      state: "Michigan",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-04-20T00:00:00.000Z",
    },
    {
      fuelup_id: 61,
      trip: 266.6,
      gallons: 17.305,
      price: 3.436,
      total: 59.46,
      odometer: 50530,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-04-25T00:00:00.000Z",
    },
    {
      fuelup_id: 62,
      trip: 79.8,
      gallons: 15.688,
      price: 3.648,
      total: 57.23,
      odometer: 50610,
      city: "Los Angeles",
      state: "California",
      vendor: "Costco",
      car_id: 3,
      date: "2020-05-04T00:00:00.000Z",
    },
    {
      fuelup_id: 63,
      trip: 264.7,
      gallons: 6.648,
      price: 2.883,
      total: 19.17,
      odometer: 50875,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 3,
      date: "2020-05-09T00:00:00.000Z",
    },
    {
      fuelup_id: 64,
      trip: 308.2,
      gallons: 5.83,
      price: 4.494,
      total: 26.2,
      odometer: 51183,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 3,
      date: "2020-05-14T00:00:00.000Z",
    },
    {
      fuelup_id: 65,
      trip: 304.3,
      gallons: 11.749,
      price: 3.952,
      total: 46.43,
      odometer: 51487,
      city: "Detroit",
      state: "Michigan",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-05-29T00:00:00.000Z",
    },
    {
      fuelup_id: 66,
      trip: 188.1,
      gallons: 16.363,
      price: 3.399,
      total: 55.62,
      odometer: 51675,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 3,
      date: "2020-06-05T00:00:00.000Z",
    },
    {
      fuelup_id: 67,
      trip: 307.1,
      gallons: 8.775,
      price: 4.431,
      total: 38.88,
      odometer: 51982,
      city: "Detroit",
      state: "Michigan",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-06-20T00:00:00.000Z",
    },
    {
      fuelup_id: 68,
      trip: 147.1,
      gallons: 19.652,
      price: 2.78,
      total: 54.63,
      odometer: 52129,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 3,
      date: "2020-07-05T00:00:00.000Z",
    },
    {
      fuelup_id: 69,
      trip: 201.8,
      gallons: 11.517,
      price: 4.627,
      total: 53.29,
      odometer: 52331,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-07-10T00:00:00.000Z",
    },
    {
      fuelup_id: 70,
      trip: 88.5,
      gallons: 13.135,
      price: 4.493,
      total: 59.02,
      odometer: 52420,
      city: "Detroit",
      state: "Michigan",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-07-25T00:00:00.000Z",
    },
    {
      fuelup_id: 71,
      trip: 100.0,
      gallons: 9.513,
      price: 4.045,
      total: 38.48,
      odometer: 52520,
      city: "Los Angeles",
      state: "California",
      vendor: "Dinoco",
      car_id: 3,
      date: "2020-08-08T00:00:00.000Z",
    },
    {
      fuelup_id: 72,
      trip: 258.6,
      gallons: 16.729,
      price: 4.156,
      total: 69.53,
      odometer: 52779,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 3,
      date: "2020-08-15T00:00:00.000Z",
    },
    {
      fuelup_id: 73,
      trip: 204.8,
      gallons: 17.844,
      price: 2.686,
      total: 47.93,
      odometer: 52984,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 3,
      date: "2020-08-28T00:00:00.000Z",
    },
    {
      fuelup_id: 74,
      trip: 186.3,
      gallons: 14.823,
      price: 4.934,
      total: 73.14,
      odometer: 53170,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 3,
      date: "2020-09-03T00:00:00.000Z",
    },
    {
      fuelup_id: 75,
      trip: 244.7,
      gallons: 6.931,
      price: 4.77,
      total: 33.06,
      odometer: 53415,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 3,
      date: "2020-09-13T00:00:00.000Z",
    },
    {
      fuelup_id: 76,
      trip: 202.4,
      gallons: 18.159,
      price: 5.032,
      total: 91.38,
      odometer: 53617,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-09-21T00:00:00.000Z",
    },
    {
      fuelup_id: 77,
      trip: 248.7,
      gallons: 19.463,
      price: 3.849,
      total: 74.91,
      odometer: 53866,
      city: "Detroit",
      state: "Michigan",
      vendor: "Costco",
      car_id: 3,
      date: "2020-10-10T00:00:00.000Z",
    },
    {
      fuelup_id: 78,
      trip: 138.3,
      gallons: 7.73,
      price: 3.491,
      total: 26.99,
      odometer: 54004,
      city: "Radiator Springs",
      state: "Arizona",
      vendor: "Costco",
      car_id: 3,
      date: "2020-10-24T00:00:00.000Z",
    },
    {
      fuelup_id: 79,
      trip: 263.8,
      gallons: 13.209,
      price: 4.185,
      total: 55.28,
      odometer: 54268,
      city: "Los Angeles",
      state: "California",
      vendor: "Flo's V8 Cafe",
      car_id: 3,
      date: "2020-11-11T00:00:00.000Z",
    },
  ]);
};
