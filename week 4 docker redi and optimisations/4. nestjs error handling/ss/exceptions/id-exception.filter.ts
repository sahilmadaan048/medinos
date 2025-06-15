 export class IdExceptionFilter implements ExceptionFilter {
    @catch(idException)
    catch(exception: IdException, host: ArgumentHost) {
        const body = {
            message: exception.message,
            error: 'Id error',
        };

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();  // it is a generic (will get imported in the actual project )

        response.status(HttpStatus.BAD_REQUEST).json(body);
    }
 }

 // and add this on top of routes and the controller level in controller.ts file for the moduel you want to define or make the customm exception available in
 @UseFilters(IdExceptionFilter)

 // second usecase of exception filter -> logging in a file
 