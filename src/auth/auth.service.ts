import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

    const fakeUsers = [
        {
            id: 1,
            username: 'anson',
            password: 'password',
            role: 'admin'
        },
        {
            id: 2,
            username: 'nathan',
            password: 'password',
            role: 'user'
        },
    ]

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService
    ) {}

    async validateUser({ username, password }: LoginDto): Promise<String> | undefined {
        console.log('Service', username, password)
        const findUser = fakeUsers.find(
            (user) => user.username === username
        );
        // if(!findUser) throw new NotFoundException('User Not Found')
        if(findUser.password === password){
            const { password, ...user } = findUser
            return this.jwtService.sign(user)
        } else {
            // throw new UnauthorizedException('Incorrect Password')
        }
    }  

}
