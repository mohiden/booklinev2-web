import { notification } from "antd";
import { IconType } from "antd/lib/notification";

export const notify = (
  message: string,
  type: IconType,
  description: string
) => {
  notification.open({
    type,
    message,
    description,
  });
};
