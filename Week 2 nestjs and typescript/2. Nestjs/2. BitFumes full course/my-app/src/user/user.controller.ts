import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto} from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller('user')
export class UserController {
    // private userService;
    // constructor() {
    //     this.userService = new UserService();
    // }

    constructor(private userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.get();
        // return {name: "sahil", email: "sahilmadaan048@gmail.com"};
    }

    @Post()
    store(@Body() createUserDto: CreateUserDto) {
        // console.log(req.body);
        return this.userService.create(createUserDto);
    }

    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto , @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.update(updateUserDto, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe)  userId: number) {
        return this.userService.getUser(userId);
    }


    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
} 
