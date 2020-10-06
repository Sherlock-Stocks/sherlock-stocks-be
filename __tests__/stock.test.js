// const fs = require('fs');
// const pool = require('../lib/utils/pool');
const { getAgent } = require('../data/data_helper');
require('../data/data_helper');
// const { users, stocks } = require('../data/seed');
// const request = require('supertest');
// const app = require('../lib/app');

describe('Stock routes', () => {
  it('creates a new user and stock', async() => {
    const response = await getAgent()
      .post('/api/v1/stocks')
      .send({
        ticker: 'IBM',
        riskChoice: 'R0',
        startingAmount: 500,
        startDate: '1-1-2020',
        endDate: '3-30-2020',
        frequency: 'TIME_SERIES_DAILY',
        feePercent: 4,
        buyCondition: 'runningAverage',
        buyUnit: 'U$',
        buyAmount: 50,
        sellCondition: 'runningAverage',
        sellUnit: 'U$',
        sellAmount: 20,
      });

    expect(response.body).toEqual({
      userId: expect.any(String),
      stockId: expect.any(String),
      ticker: 'IBM',
      riskChoice: 'R0',
      startingAmount: 500,
      startDate: '1-1-2020',
      endDate: '3-30-2020',
      frequency: 'TIME_SERIES_DAILY',
      feePercent: 4,
      buyCondition: 'runningAverage',
      buyUnit: 'U$',
      buyAmount: 50,
      sellCondition: 'runningAverage',
      sellUnit: 'U$',
      sellAmount: 20,
    });
  });

  // it('finds a stock by id', async() => {
  //   const response = await getAgent()
  //     .get('/api/v1/stocks/1');

  //   expect(response.body).toEqual({
  //     userId: expect.any(String),
  //     stockId: expect.any(String),
  //     ticker: 'IBM',
  //     riskChoice: 'R0',
  //     startingAmount: 500,
  //     startDate: '1-1-2020',
  //     endDate: '3-30-2020',
  //     frequency: 'TIME_SERIES_DAILY',
  //     feePercent: 4,
  //     buyCondition: 'runningAverage',
  //     buyUnit: 'U$',
  //     buyAmount: 50,
  //     sellCondition: 'runningAverage',
  //     sellUnit: 'U$',
  //     sellAmount: 20,
  //   });
  // });

  it('finds stock by user id', async() => {
    const response = await getAgent()
      .get('/api/v1/stocks/portfolio/1');
    expect(response.body).toEqual([{
      userId: expect.any(String),
      stockId: expect.any(String),
      ticker: 'IBM',
      riskChoice: 'R0',
      startingAmount: 500,
      startDate: '1-1-2020',
      endDate: '3-30-2020',
      frequency: 'TIME_SERIES_DAILY',
      feePercent: 4,
      buyCondition: 'runningAverage',
      buyUnit: 'U$',
      buyAmount: 50,
      sellCondition: 'runningAverage',
      sellUnit: 'U$',
      sellAmount: 20,
    },
    {
      userId: expect.any(String),
      stockId: expect.any(String),
      ticker: 'IBM',
      riskChoice: 'R0',
      startingAmount: 500,
      startDate: '1-1-2020',
      endDate: '3-30-2020',
      frequency: 'TIME_SERIES_DAILY',
      feePercent: 4,
      buyCondition: 'runningAverage',
      buyUnit: 'U$',
      buyAmount: 50,
      sellCondition: 'runningAverage',
      sellUnit: 'U$',
      sellAmount: 20,
    }
    ]);
  });

  // it('updates a stock', async() => {
  //   const response = await getAgent()
  //     .put('/api/v1/stocks/1')
  //     .send({
  //       ticker: 'IBM',
  //       riskChoice: 'R0',
  //       startingAmount: 500,
  //       startDate: '1-1-2020',
  //       endDate: '3-30-2020',
  //       frequency: 'TIME_SERIES_DAILY',
  //       feePercent: 4,
  //       buyCondition: 'runningAverage',
  //       buyUnit: 'U$',
  //       buyAmount: 70,
  //       sellCondition: 'runningAverage',
  //       sellUnit: 'U$',
  //       sellAmount: 50,
  //     });

  //   expect(response.body).toEqual({
  //     userId: expect.any(String),
  //     stockId: expect.any(String),
  //     ticker: 'IBM',
  //     riskChoice: 'R0',
  //     startingAmount: 500,
  //     startDate: '1-1-2020',
  //     endDate: '3-30-2020',
  //     frequency: 'TIME_SERIES_DAILY',
  //     feePercent: 4,
  //     buyCondition: 'runningAverage',
  //     buyUnit: 'U$',
  //     buyAmount: 70,
  //     sellCondition: 'runningAverage',
  //     sellUnit: 'U$',
  //     sellAmount: 50,
  //   });
  // });

  // it('deletes a stock', async() => {
  //   const response = await getAgent()
  //     .delete('/api/v1/stocks/1');

  //   expect(response.body).toEqual({
  //     userId: expect.any(String),
  //     stockId: expect.any(String),
  //     ticker: 'IBM',
  //     riskChoice: 'R0',
  //     startingAmount: 500,
  //     startDate: '1-1-2020',
  //     endDate: '3-30-2020',
  //     frequency: 'TIME_SERIES_DAILY',
  //     feePercent: 4,
  //     buyCondition: 'runningAverage',
  //     buyUnit: 'U$',
  //     buyAmount: 50,
  //     sellCondition: 'runningAverage',
  //     sellUnit: 'U$',
  //     sellAmount: 20,
  //   });
  // });
});
