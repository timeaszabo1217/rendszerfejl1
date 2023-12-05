const request = require('supertest');
const express = require('express');
const app = express();

const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const chai = require('chai');
const expect = chai.expect;

describe('Password Change Functionality', () => {
  let token;

  before(async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'atkeltacsigaaztuon@gmail.com',
        password: 'csigabiga',
      });
    token = response.body.token;
  });

  it('Should change password successfully', async () => {
    const current_password = 'csigabiga';
    const new_password = 'cicamica';
    const confirm_password = 'cicamica';

    const expected_response = {
      redirect: '/profile',
    };

    const req = {
      body: {
        current_password,
        new_password,
        confirm_password,
      },
    };
    const res = await request(app)
      .post('/profile/edit/password')
      .set('Authorization', `Bearer ${token}`)
      .send(req);

    expect(res.status).to.equal(200);
    expect(res.redirect).to.equal(expected_response.redirect);
  });

  it('TC-02: Empty input fields should trigger a warning', async () => {
    const current_password = '';
    const new_password = '';
    const confirm_password = '';

    const req = {
      body: {
        current_password,
        new_password,
        confirm_password,
      },
    };
    const res = await request(app)
      .post('/profile/edit/password')
      .set('Authorization', `Bearer ${token}`)
      .send(req);

    expect(res.status).to.equal(302);
  });

  it('TC-03: Providing an incorrect current password', async () => {
    const current_password = 'nemcsigabiga';
    const new_password = 'cicamica';
    const confirm_password = 'cicamica';

    const req = {
      body: {
        current_password,
        new_password,
        confirm_password,
      },
    };
    const res = await request(app)
      .post('/profile/edit/password')
      .set('Authorization', `Bearer ${token}`)
      .send(req);

    expect(res.status).to.equal(302);
  });

  it('TC-04: Using the current password as the new one', async () => {
    const current_password = 'csigabiga';
    const new_password = 'csigabiga';
    const confirm_password = 'csigabiga';

    const req = {
      body: {
        current_password,
        new_password,
        confirm_password,
      },
    };
    const res = await request(app)
      .post('/profile/edit/password')
      .set('Authorization', `Bearer ${token}`)
      .send(req);

    expect(res.status).to.equal(302);
  });

  it('TC-05: Providing an invalid new password', async () => {
    const current_password = 'csigabiga';
    const new_password = 'asd';
    const confirm_password = 'asd';

    const req = {
      body: {
        current_password,
        new_password,
        confirm_password,
      },
    };
    const res = await request(app)
      .post('/profile/edit/password')
      .set('Authorization', `Bearer ${token}`)
      .send(req);

    expect(res.status).to.equal(302);
  });

});