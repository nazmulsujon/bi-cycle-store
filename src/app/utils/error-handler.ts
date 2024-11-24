import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

interface ErrorResponse {
  message: string;
  success: boolean;
  error: {
    name: string;
    message?: string;
    errors?: Record<string, { message: string; path: (string | number)[] }>;
  };
  stack?: string;
}

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (error instanceof ZodError) {
    const response: ErrorResponse = {
      message: 'Validation failed',
      success: false,
      error: {
        name: 'ValidationError',
        errors: error.errors.reduce(
          (acc, curr) => {
            acc[curr.path.join('.')] = {
              message: curr.message,
              path: curr.path,
            };
            return acc;
          },
          {} as Record<string, { message: string; path: (string | number)[] }>,
        ),
      },
      stack: error.stack,
    };
    res.status(400).json(response);
    return;
  }

  if (error instanceof Error && error.message === 'Product not found') {
    const response: ErrorResponse = {
      message: 'Product not found',
      success: false,
      error: {
        name: 'NotFoundError',
        message: error.message,
      },
      stack: error.stack,
    };
    res.status(404).json(response);
    return;
  }

  if (error instanceof Error) {
    const response: ErrorResponse = {
      message: 'Internal server error',
      success: false,
      error: {
        name: 'InternalServerError',
        message: error.message,
      },
      stack: error.stack,
    };
    res.status(500).json(response);
    return;
  }

  const response: ErrorResponse = {
    message: 'Unknown error',
    success: false,
    error: {
      name: 'UnknownError',
      message: 'An unknown error occurred',
    },
    stack: undefined,
  };
  res.status(500).json(response);
};
