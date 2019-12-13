import axios from 'axios';

// HTTP Request & Response 와 관련된 기본 설정 (+토큰 관련 로직)
const	baseURL = 'https://api.hnpwa.com/v0/';
const	newsURL = baseURL + 'news/1.json';
const	askURL = baseURL + 'ask/1.json';
const	jobsURL = baseURL + 'jobs/1.json';


// API 함수들을 정리
function fetchNewsList() {
	return	axios.get(newsURL);
}
function fetchAskList() {
	return axios.get(askURL);
}
function fetchJobsList() {
	return axios.get(jobsURL);
}

export {
	fetchNewsList,
	fetchAskList,
	fetchJobsList
}