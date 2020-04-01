interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(
      `e-mail enviado para ${to.name} (${to.email}): ${message.subject}`
    );
  }
}

export default EmailService;
