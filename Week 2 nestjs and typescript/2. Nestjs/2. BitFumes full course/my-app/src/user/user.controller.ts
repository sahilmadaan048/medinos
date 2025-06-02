import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto, UpdateUserResponseDto} from "./dto/update-user.dto";
import { CreateUserDto, CreateUserResponseDto } from "./dto/create-user.dto";
import { ApiBadRequestResponse, ApiBearerAuth, ApiDefaultGetter, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('User Section')
@Controller('user')
export class UserController {
    // private userService;
    // constructor() {
    //     this.userService = new UserService();
    // }

    constructor(private userService: UserService) { }
    
    @ApiBadRequestResponse({description: 'Bad Payload sent'})
    @ApiOperation({summary: 'Used to get all the users currently stored in the database'})
    @ApiResponse({status: 201, description: 'Got Users successfully', type: [CreateUserResponseDto]})
    @Get()
    getUsers() {
        return this.userService.get();
    }

    @ApiBadRequestResponse({description: 'Bad Payload sent'})
    @ApiOperation({summary: 'Used to create a neq user'})
    @ApiResponse({status: 201, description: 'User Created successfully', type: CreateUserResponseDto})
    @Post()
    store(@Body() createUserDto: CreateUserDto) {
        // console.log(req.body);
        return this.userService.create(createUserDto);
    }
    
    @ApiBadRequestResponse({description: 'Bad Payload sent'})
    @ApiOperation({summary: 'Used to update an already existing user'})
    @ApiResponse({status: 201, description: 'User Updated successfully', type: UpdateUserResponseDto})
    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto , @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.update(updateUserDto, userId);
    }
    
    @ApiBadRequestResponse({description: 'Bad Payload sent'})
    @ApiOperation({summary: 'Used to get the user based on id'})
    @ApiResponse({status: 201, description: 'Got User successfully', type: UpdateUserResponseDto})
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe)  userId: number) {
        return this.userService.getUser(userId);
    }
    
    @ApiBadRequestResponse({description: 'Bad Payload sent'})
    @ApiOperation({summary: 'Used to delete a user from databased based on id'})
    @ApiResponse({status: 201, description: 'Deleted user successfully', type: UpdateUserResponseDto})
    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
} 
