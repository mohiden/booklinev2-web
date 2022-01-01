import { message } from "antd";

export const successMessage = (description: string) => {
    message.success(description, 3);
}