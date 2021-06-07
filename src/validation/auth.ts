import { NextFunction, Request, Response } from "express";


export default class AuthValidation {


    static login(req: Request, res: Response, next: NextFunction) {

        const { email, password } = req.body;

        if (typeof email !== "string") throw "Email must be a string"

        if (typeof password !== "string") throw "password must be a string"

        if (password.length < 6) throw "Password mush not be less than six (6) characters";


        next();
    }

    static register(req: Request, res: Response, next: NextFunction) {

        const {name, email, password} = req.body;

        if (typeof name !== "string") throw "Name must be string"

        if (typeof email !== "string") throw "Email must be a string"

        if (typeof password !== "string") throw "password must be a string"


        next();

    }


}
