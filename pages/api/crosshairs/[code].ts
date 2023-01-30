import type { NextApiRequest, NextApiResponse } from "next";
import api from "unofficial-valorant-api";
import ImageKit from "imagekit";
import { Firebase } from "../../../services/firebase.service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const valorant = new api();
  const { code } = req.query;
  const imagekit = new ImageKit({
    publicKey: "public_K3IgvAAA8n1QIaxB3jBEHYQlJJ4=",
    privateKey: "private_n5y6fsGoS3eJ9L0DDfUP4Ws7KtQ=",
    urlEndpoint: "https://ik.imagekit.io/gcfptzuc7",
  });
  const crosshairName = Math.random().toString(36).substring(7);
  const firebase = new Firebase();
  if (code) {
    valorant.getCrosshair({ code: code.toString(), size: 512 }).then((data) => {
      imagekit
        .upload({
          file: data.data as Buffer,
          fileName: `${crosshairName}.jpeg`,
        })
        .then((response) => {
          const date = new Date();
          const dateString = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          firebase.collection("crosshairs").add({
            name: crosshairName,
            code: code.toString(),
            url: response.url,
            createdAt: dateString,
          });
          res.status(200).json({
            image: response.url,
          });
        });
    });
  }
}
