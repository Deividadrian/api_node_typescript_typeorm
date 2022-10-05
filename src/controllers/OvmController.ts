import { ovmRepository } from './../repositories/ovmRepository';
import { Request, Response } from "express";

export class OvmController {
  async create(req: Request, res: Response) {
    const { numeroOvm } = req.body

    try {
      const newOvm = ovmRepository.create({ numeroOvm })

      await ovmRepository.save(newOvm)

      return res.status(201).json(newOvm)

    } catch (error) {
      console.log(error)
      return res.status(500).json({mesage: 'Internal Server Error'})
    }
  }
}