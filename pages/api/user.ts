import { NextApiRequest, NextApiResponse } from "next";
import api from "unofficial-valorant-api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const valorant = new api();

  const { name, tag }: any = req.query;
  valorant
    .getAccount({
      name: name,
      tag: tag,
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
}
