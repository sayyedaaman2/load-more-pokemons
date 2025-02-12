import {describe,it,expect} from 'vitest'
function addTwo(a,b){
    if(!a || !b){
        return null;
    }
    return a+b;
}

describe("Demo Testing...",()=>{
    it("addTwo function without arguments",()=>{
        
      

        expect(addTwo()).toBeNull();
    })

    it("addTwo function with one argument",()=>{
        expect(addTwo(1)).toBeNull();
    })

    it("addTwo function with both arguments",()=>{
        expect(addTwo(2,9)).toBe(11);
    })
})