import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
    ) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(
    @Body() loginDto: LoginDto
  ) {
    console.log('controller', loginDto)
    return this.authService.validateUser(loginDto)
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(
    @Req() req: Request
  ) {
    console.log('Inside AuthController (profile)', req.user)
  }

}
