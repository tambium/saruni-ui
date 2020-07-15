import { marks } from '../../schema';

const { em, strike, strong, underline, code } = marks;

export const schema = {
  marks: { em, strike, strong, underline, code } as any,
};
