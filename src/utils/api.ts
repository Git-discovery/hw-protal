import request from './request';

const baseUrl = 'http://localhost:9000';

export async function getHomeCarousel() {
  return request(`${baseUrl}/home/carousel`);
}

export async function getHomeInfos() {
  return request(`${baseUrl}/home/infos`);
}

export async function getHomeNews() {
  return request(`${baseUrl}/home/news`);
}
