import client from './client';

export async function searchDetected(params) {
  const formatted = {
    ...params,
    tags: Object.keys(params.tags)
      .filter((k) => params.tags[k].length !== 0 && k !== 'ETC')
      .reduce((a, k) => ({ ...a, [k]: params.tags[k] }), {}),
  };
  const requestUrl =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? `/static/SecretData.example.json`
      : `/api/nlp/article/analyze/`;
  const response = await client.get(requestUrl, {
    ...formatted,
  });

  return response.data;
}
