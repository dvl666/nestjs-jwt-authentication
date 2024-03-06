import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoteExpiration: false,
            secretOrKey: '666-616',       
        })
    }

    validate(payload: any) {
        console.log('Inside JWT Strategy')
        console.log(payload)
        return payload
    }

}