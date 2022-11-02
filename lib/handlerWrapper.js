/** @format */

export const handlerWrapper = (handler) => async (req, res) => {
  try {
    const result = await handler(req, res);
    res.status(200).json({ products: [{ name: 'item' }] });
  } catch (error) {
    console.error('handlerWrapper', error);
    res.status(400).json({ message: `error: ${error}` });
  }
};
