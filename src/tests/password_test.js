const request = require('supertest');
const express = require('express');
const { jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");
const router = require('../routes/route-profile');
const UserDAO = require("../dao/user-dao.js");
const app = express();
app.use('/profile', router);

const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const chai = require('chai');
const expect = chai.expect;

let userEmail;
let userPassword;
let token;
const user = new UserDAO().getUserByEmail("atkeltazuton@gmail.com");

if (user) {
  userEmail = user.email;
  userPassword = user.password;
  console.log('A felhasználó megtalálható az adatbázisban:');
  token = jwt.sign({ email: userEmail }, jwtSecret, { expiresIn: '1d' });
  console.log('Token: ', token);
} else {
  console.log('A felhasználó nem található az adatbázisban');
}

if (token) {
  jwt.verify(token, jwtSecret, async (err, decodedToken) => {
  // res.send(decodedToken);
  const current_email = decodedToken.email;
  const user = await new UserDAO().getUserByEmail(current_email);
  });
};

describe('Jelszó módosítás', () => {
  it('TC-01: Helyes adatokat adunk meg minden mezőben', async () => {
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

  it('TC-02: Az input mezőket üresen hagyjuk', async () => {
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

  it('TC-03: Olyan jelenlegi jelszót adunk meg, amely nincs használatban', async () => {
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

  it('TC-04: Ugyanazt az új jelszót adjuk meg, amely már a jelenlegi jelszó', async () => {
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

  it('TC-05: Olyan új jelszót ad meg, amely nem felel meg az elvárásoknak', async () => {
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

  it('TC-06: Olyan megerősítő jelszót adunk meg, amely nem egyezik az újonnan megadottal', async () => {
    const current_password = 'csigabiga';
    const new_password = 'cicamica';
    const confirm_password = 'cica';

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