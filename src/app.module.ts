import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entitiy';
import { PostModul } from './modules/post.module';
import { UserModule } from './modules/user.module';
import { CommentModule } from './modules/comment.module';
import { HistoryModule } from './modules/history.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configservice:ConfigService)=>({
        type:'mysql',
        username: configservice.get('DB_USERNAME'),
        password: configservice.get('DB_PASSWORD'),
        host: configservice.get('HOST'),
        database: configservice.get('DATABASE'),
        port: configservice.get('PORT'),
        autoLoadEntities:true,
        entities:[User],
        synchronize:true
      }),
      inject:[ConfigService]
    }),
    AuthModule,
    PostModul,
    UserModule,
    CommentModule,
    HistoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
