export const printMessage = ({ type, message }: PrintMessageProps): void => {
  const typeMap: { [key in MessageType]: string } = {
    title: '\x1b[4m%s\x1b[0m',
    error: '\x1b[31m%s\x1b[0m',
    warning: '\x1b[33m%s\x1b[0m',
    success: '\x1b[32m%s\x1b[0m',
  };

  console.log(typeMap[type], `${message}`);
};

type MessageType = 'title' | 'success' | 'error' | 'warning';

interface PrintMessageProps {
  type: MessageType;
  message: string;
}
