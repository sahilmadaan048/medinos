import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";

@Controller('user')
export class UserController {

    @Get()
    getHello(): string {
        return 'I am on User controller';
    }

    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    @Get('/:userId')
    getUser(@Param() params: { userId: number }) {
        return params;
    }


    @Delete('/:userId')
    deleteUser(@Param() params: { userId: number }): number {
        return params.userId;
    }


    @Patch('/:userId')
    update(@Param() params: { userId: number }): number {
        return params.userId;
    }
}