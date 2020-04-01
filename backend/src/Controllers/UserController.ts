import { Request, Response } from "express";

import EmailService from "../services/EmailService";

const users = [
  {
    name: "Lawisch",
    email: "lawisch@gmail.com"
  }
];

export default {
  async index(request: Request, response: Response) {
    return response.json(users);
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Lawisch", email: "lawisch@gmail.com" },
      message: { subject: "Bem vindo", body: "Bem vindo" }
    });

    return response.send();
  }
};
