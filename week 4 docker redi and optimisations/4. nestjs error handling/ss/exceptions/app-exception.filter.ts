@catch()
 export class AppExceptionFilter implements ExceptionFilter {
    catch(exception: IdException, host: ArgumentHost) {
        const xtc = host.switchToHttp();
        ket status = HttpStatus.INTERNAL_SERVER_ERROR;
        let msg = "Internal Server Error";
        
        if(exception instanceof HttpException) {
            status = exception.getStatus();
            msg = exception.message;
        }

        const { httpAdapter} = this.httpAdapterhost;

        const body = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: msg,
        };

        this.writeHttpLog(body);

        httpAdapter.reply(ctx.getRespinse(), body, status);
    }
 } 

 private async writeHttpLog(data: Record<StorageManager, any>) {
    
 }