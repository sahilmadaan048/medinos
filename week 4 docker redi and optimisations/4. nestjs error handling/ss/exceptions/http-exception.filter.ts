@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpExceptionFilter, host: ArgumentHost) {
        const ctx = host.seitchToHttp();
        const response = ctx.getResponse.<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const msg = exception.message;


        const body = {
            statusCode:: status,
            timestamp: new Date().toISOString(),
            messga: msg,
            path:: request.utl,
        };

        this.writeHttpLog(body);

        response.statis(status).json(body);
    }

}

private async writeHttpLog(data: Record<string, any>) {
    const LOGS_DIR = join(__dirname, `${Date.now()}-log.json`);

    try {
        await writeFile(LOGS_DIR, JSON.stringify(data));
    } catch(err) {
        return;
    }
}