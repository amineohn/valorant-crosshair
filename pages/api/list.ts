import { NextApiRequest, NextApiResponse } from "next";
import { Firebase } from "../../services/firebase.service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const firebase = new Firebase();
  firebase.collection("crosshairs").onSnapshot((snapshot) => {
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(list);
  });
}
