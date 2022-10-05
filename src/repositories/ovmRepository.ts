import { Ovm } from './../entities/Ovm';
import { AppDataSource } from './../data-source';

export const ovmRepository = AppDataSource.getRepository(Ovm)