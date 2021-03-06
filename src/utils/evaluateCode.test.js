
import evaluateCode, {formatEval,arrayDiff} from './evaluateCode';

it('evaluate a number', () => {
  expect(
    evaluateCode(`log(5)`)
  ).toBe(formatEval(5) )
});


it('evaluate a string', () => {
  expect(
    evaluateCode(`log("5")`)
  ).toBe(formatEval("5") )
});

it('evaluate an array', () => {
  const evaluated = evaluateCode(`log([0,1])`)
  const res = formatEval( [0,1] )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it('evaluate mixed array', () => {
  const evaluated = evaluateCode(`log([0,1, "str", null])`)
  const res = formatEval( [0,1, "str", null] )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it('evaluate nominal function ', () => {
  const evaluated = evaluateCode(`
    function a(){ return 5  }
    log(a())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it('evaluate assigned anonym function ', () => {
  const evaluated = evaluateCode(`
    var a = function (){ return 5  }
    log(a())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it('evaluate assigned  function ', () => {
  const evaluated = evaluateCode(`
    var a = function a(){ return 5  }
    log(a())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it('arrayDiff ', () => {

  expect(
    arrayDiff([1,2,3,4] , [1,2] )
  ).toEqual(
    [3,4]
  )


  expect(
    window['res']
  ).toBe(
    undefined
  )

});

it('evaluate this in object obj.myFunc()', () => {
  const evaluated = evaluateCode(`
    var obj = {
      res : 5
    }
    var a = function a(){ return this.res  }
    obj.myFunc = a
    log(obj.myFunc())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});


it('evaluate .call  function ', () => {
  const evaluated = evaluateCode(`
    var obj = {
      res : 5
    }
    var a = function a(){ return this.res  }
    log(a.call(obj))
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it(' function this = window with res = 5;', () => {
  const evaluated = evaluateCode(`
    res = 5;
    function a(){ return this.res }
    log(a())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )

});

it(' env should be clear after the execution', () => {
  expect(
    window['res']
  ).toBe(
    undefined
  )
});


it(' function this = window with var res = 5;', () => {
  const evaluated = evaluateCode(`
    var res = 5;
    function a(){ return this.res }
    log(a())
  `)
  const res = formatEval( 5 )
  expect(
    evaluated
  ).toBe(
    res
  )
});

it(' env should be clear after the execution', () => {
  expect(
    window['res']
  ).toBe(
    undefined
  )
});
