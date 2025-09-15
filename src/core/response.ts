export const ok = (res: any, data: any, message = "OK") =>
  res.json({ message, data });
