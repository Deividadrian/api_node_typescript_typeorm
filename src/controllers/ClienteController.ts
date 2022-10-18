import { clienteRepository } from './../repositories/clienteRepository';
import { Request, Response } from "express";

export class ClientController {
  async create(req: Request, res: Response) {
    const { name } = req.body
    
    if(!name) {
      return res.status(400).json({mesagem: "The name is mandatory"})
    }

    try {
      const newCliente = clienteRepository.create({ name })

      await clienteRepository.save(newCliente)

      return res.status(201).json(newCliente)

    } catch (error) {
      console.log(error);
      return res.status(500).json({mesage: 'Internal Server Error'})
    }
  }
}