import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async signup(email, password) {
        // See if email is in use
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new BadRequestException('email in use')
        }
        // Hash users password

        // Create a new user and save it

        // return the user
    }

    signin() { }
}
