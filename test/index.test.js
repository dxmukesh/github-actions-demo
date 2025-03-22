const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello from GitHub Actions CI/CD!');
});

describe('GET /', () => {
    it('responds with Hello from GitHub Actions CI/CD!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello from GitHub Actions CI/CD!');
    });
});
