// import client from './client';
import axios from 'axios'

export async function searchDetected(params) {
  const formatted = {
    ...params,
    tags: Object.keys(params.tags)
      .filter((k) => params.tags[k].length !== 0 && k !== 'ETC')
      .reduce((a, k) => ({ ...a, [k]: params.tags[k] }), {}),
  };
  const client = axios.create({
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    withCredentials: true,
  });

  const requestUrl =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? `/static/data/SecretData.example.json`
      : `/api/nlp/analyze/`;

  const requestMethod =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? client.get
      : client.post;

  const response = await requestMethod(requestUrl, {
    ...formatted,
  });

  return response.data;
}
