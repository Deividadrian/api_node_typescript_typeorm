import { Client } from './../entities/Client';
import { AppDataSource } from './../data-source';

export const clienteRepository = AppDataSource.getRepository(Client)