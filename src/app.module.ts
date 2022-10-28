import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DemandModule } from './demand/demand.module';

@Module({
  imports: [DemandModule],
  providers: [AppService],
})
export class AppModule {}
