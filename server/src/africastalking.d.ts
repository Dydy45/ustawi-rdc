declare module 'africastalking' {
    interface Credentials {
        apiKey: string;
        username: string;
    }
    interface SMSOptions {
        to: string[];
        message: string;
    }
    interface SMSResponse {
        SMSMessageData: {
            Messsage: string;
            recipients: Array<{ number: string; cost: string; status: string }>;
        };
    }
    interface AfricasTalking {
        SMS: {
            send(opts: SMSOptions): Promise<SMSResponse>
        };
    }
    
    function init(credentials: Credentials): AfricasTalking;
    export = init;
}