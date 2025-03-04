
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { DispatcherService } from './dispatcher.service';
import { DispatcherDto} from "";
import { Dispatcher } from '';

@Controller('dispatcher')
export class DispatcherController {
  constructor(private readonly dispactcherService: DispatcherService) {}

  @Post()
  async createDispatcher(
    @Body() DispatcherDto: DispatcherDto,
  ): Promise<Dispatcher> {
    return this.dispactcherService.CreateDispatcher(createDispactcherDto);
  }

  @Get(':id')
  async getDispactherById(@Param('id') id: number): Promise<Dispatcher> {
    return this.dispactcherService.getDispatcherById(id);
  }

  @Get()
  async getDispactch(): Promise<Dispatcher[]> {
    return this.dispactcherService.getDispactch();
  }
}




