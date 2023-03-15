import {render, screen} from '@testing-library/react';
import Async from './Async';
//new test suit
describe('Async component', ()=>{

    test('render posts if request succeeds', async ()=>{
        render(<Async/>)
        //getAllByRole to get all fetched data however it wont work cause of asynchronous data
        //findAllByRole will work because it returns a PROMISE so u have to add async and await
        const listItemElements = await screen.findAllByRole('listitem'); //('listitem',{exact:..},{timeout})
        expect(listItemElements).not.toHaveLength(0);
    });
})