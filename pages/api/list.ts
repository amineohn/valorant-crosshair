import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = fs.readdirSync("./public/crosshairs");
  const crosshairs = data.map((crosshair) => {
    return {
      name: crosshair,
      path: `/crosshairs/${crosshair}`,
    };
  });

  res.status(200).json(crosshairs);
}
