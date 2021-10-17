import client from './client';

export async function searchDetected(params) {
  const formatted = {
    ...params,
    tags: Object.keys(params.tags)
      .filter((k) => params.tags[k].length !== 0 && k !== 'ETC')
      .reduce((a, k) => ({ ...a, [k]: params.tags[k] }), {}),
  };
  const response = await client.post(`/api/nlp/analyze/`, {
    ...formatted,
  });

  return response.data;
}
