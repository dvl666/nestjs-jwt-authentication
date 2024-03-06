import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly authService: AuthService
    ) {
        super();
    }

    async validate(username: string, password: string) {
        console.log('local.strategy', username, password)
        const user = await this.authService.validateUser({ username, password });
        if(!user) throw new UnauthorizedException('Not Authorized');
        return user
    }

}