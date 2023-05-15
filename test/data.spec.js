import { filtrarPorAnyo } from '../src/data.js';


describe('filtrarPorAnyo', () => {
  it('is a function', () => {
    expect(typeof filtrarPorAnyo).toBe("function");
  });
});

describe('retunr films by year selec', () => {
  it('returns only movies the year select`', () => {
    const films = [
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
      },
      {
        "title": "My Neighbor totoro",
        "release_date": "1988",
      }
    ]
    
    const dataFiltered =
      [
        {
          "title": "My Neighbor totoro",
          "release_date": "1988",
        }
      ]
      ;
    expect(filtrarPorAnyo(films, "1988")).toStrictEqual(dataFiltered);
  });
});

  
