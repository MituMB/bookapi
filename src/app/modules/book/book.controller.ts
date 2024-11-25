import { Request, Response } from 'express';
import { BookModel } from "./book.model";

const createBook = async (req: Request, res: Response) => {
    try {
        const book = new BookModel(req.body);
        const result =  await book.save();
        res.status(200).json({
            message: 'book addedsuccesfully',
            success: true,
            data: result,
          });
    } catch (err) {
        res.status(400).json({ message: "Validation failed", err });
      console.log(err);
    }
  };

  export const BookControllers = {
    createBook
  };
  