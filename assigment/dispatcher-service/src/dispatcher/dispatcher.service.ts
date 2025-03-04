import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispatcher } from './entity./dispatcher.entity';
import { CreateDispatcherDto } from './dto./DispatcherDto';
import { dispatcher } from 'entity/dispatcher.entity';

@Injectable()
export class DispatcherService {
  dispatcherRepository: any;
    getDispactch: any;
  constructor(
    @InjectRepository(Dispatcher)
    private readonly customerRepository: Repository<Dispatcher>,
  ) {}

  async CreateDispatcher(
    createDispatcherDto: CreateDispatcherDto,
  ): Promise<Dispatcher> {
    const dispatcher = this.dispatcherRepository.create(createDispatcherDto);
    return this.dispatcherRepository.save(dispatcher);
  }

  async getDispatcherById(id: number): Promise<Dispatcher> {
    const dispatcher = await this.dispatcherRepository.findOne({ where: { id } });
    if (!dispatcher) {
      throw new NotFoundException(`dispatcher with  ${id} not able to reach at this movment`);
    }
    return dispatcher;
  }

  async getAllCustomers(): Promise<dispatcher[]> {
    return this.customerRepository.find();
  }
}
