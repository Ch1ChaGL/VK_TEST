export const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
});
