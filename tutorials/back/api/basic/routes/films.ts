import { Router } from "express";
import { Films } from "../types";

const films: Films[] = [
    {
      id: 1,
      title: "La Vie de Wawa",
      director:"Sohib et ca mere(a celle de wawa)",
      duration: 0.50
    },
    {
        id: 2,
        title: "La etudes de Wawa",
        director:"Sohib et Wawa",
        duration: 200
      },
      {
        id: 3,
        title: "Le vomi de wawa au touce d'une femme",
        director:"Wawa et la fille",
        duration: 0.10
      },
  ];

const router = Router();


router.get("/", (_req, res) => {
  return res.json();
});

export default router;