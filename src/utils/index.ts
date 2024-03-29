
export * from "./Notification";
export * from './Message';

//decode jwt token
export function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

//generate generic request url
export const paginatedOptions = <T>(path: string, select?: Array<keyof T>, page: number = 0, size: number = 0, search?: string) => {
  const selection = select?.toString().split(',').join(' ');
  const url = `${path}/${selection ? selection : ""}?page=${page}&size=${size}&search=${search && search}`;
  return url;

}