import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfing } from './config/typeconfig.orm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeOrmConfing), AuthModule],
})
export class AppModule {}
