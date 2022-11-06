// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import api from "unofficial-valorant-api";
import fs from "fs";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const valorant = new api();
  const { crosshair }: any = req.query;
  let isAdded = false;
  const crosshairName = Math.random().toString(36).substring(7);
  valorant.getCrosshair({ code: crosshair, size: 512 }).then((data) => {
    if (data.data) {
      writeFileSync(
        `./public/crosshairs/${crosshairName}.png`,
        data.data as any
      );
      isAdded = true;
    } else {
      isAdded = false;
    }
    res.status(200).json({
      crosshairIsAdded: isAdded ? "Added" : "Not Added",
    });
  });
}
