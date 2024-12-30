import { JwtPayload, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../constant";

export const authenticateRequest = (req: any, res: any) => {
  let user: undefined;
  try {
    if (req.headers["authorization"]) {
      const token = verify(
        req.headers["authorization"],
        JWT_SECRET
      ) as JwtPayload;
      user = token.data;
    }
  } catch (e) {
    console.log(e);
  }
  return user;
};
