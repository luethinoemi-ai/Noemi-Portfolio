import { L } from "../i18n/context";

export const apprenticeship = {
  title: L(
    "Applikationsentwicklerin EFZ",
    "Application developer (EFZ)",
    "Développeuse d’applications CFC",
  ),
  current: 3,
  total: 8,
  semesters: [
    {
      number: 3,
      modules: [
        {
          code: "M293",
          name: L(
            "Webauftritt erstellen",
            "Create a website",
            "Créer un site web",
          ),
          status: "active",
        },
        {
          code: "M320",
          name: L(
            "Objektorientiert programmieren",
            "Object-oriented programming",
            "Programmation orientée objet",
          ),
          status: "active",
        },
        {
          code: "M322",
          name: L(
            "Benutzerschnittstellen",
            "User interfaces",
            "Interfaces utilisateur",
          ),
          status: "done",
        },
      ],
    },
    {
      number: 4,
      modules: [
        {
          code: "M###",
          name: L("Folgt", "To follow", "À venir"),
          status: "planned",
        },
      ],
    },
  ],
};
