import {render, screen} from '@testing-library/react';
import Async from './Async';
//new test suit
describe('Async component', ()=>{

    test('render posts if request succeeds', async ()=>{
      //dummy function that mocks a request so we dont saturate the server with http requests: jest.fn
      window.fetch = jest.fn();
      //resolvedValue is .then((response) => response.json()) in Async.js
      window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: 'First post'}],
      });
      render(<Async />);
      //getAllByRole to get all fetched data however it wont work cause of asynchronous data
      //findAllByRole will work because it returns a PROMISE so u have to add 'async' and 'await'
      const listItemElements = await screen.findAllByRole("listitem"); //('listitem',{exact:..},{timeout})
      expect(listItemElements).not.toHaveLength(0);
    });
})

//During testing you dont wanna saturate your server with requests or even post request that will
//fill your database with data. 
//Therefore we either send a fake request or send a request to a fake/test server