import { productRepository } from './../repositories/productRepository';
import { Request, Response } from "express";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, partNumber, serialNumber } = req.body

    try {
      const newProduct = productRepository.create({ name, partNumber, serialNumber })

      await productRepository.save(newProduct)

      return res.status(201).json(newProduct)

    } catch (error) {
      console.log(error)
      return res.status(500).json({mesage: 'Internal Server Error'})
    }
  }
}