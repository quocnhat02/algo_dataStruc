import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../services/userService';
import { ForbiddenError } from '../utils/errors';

export const checkUserBlocked = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?._id;
  if (!userId) {
    return next(new ForbiddenError('User not authenticated'));
  }

  const user = await getUserById(userId.toString());
  if (!user) {
    return next(new ForbiddenError('User not found'));
  }

  if (user.isBlocked) {
    return next(new ForbiddenError(`Your account has been blocked. Reason: ${user.blockedReason}`));
  }

  next();
};
