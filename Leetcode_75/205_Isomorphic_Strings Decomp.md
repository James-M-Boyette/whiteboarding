# "205_Isomorphic_Strings" Notes

## What did I learn?

#### 'every' method

I learned about the 'every' method, which allows you to

- Take in two arrays,
- declare the element & index of the first array,
- and do work (like comparing el of array 1 to index of array 2)
  > ...
- It will return a boolean depending on whether the work succeeds in all cases.

#### returning & storing multiple results from a function

At one point, I thought I'd need to return _both_ the stringDictionary AND the stringPattern ... but I couldn't figure out how to store thos results.

My first instinct was to _destructure_ the results ...
If I return both objects within an object ({ stringDictionary, stringPattern }), I could destructure them like this:

      const { stringDictionary, stringPattern } = patternAnalyzer(s);

PROBLEM: destructuring isn't actually what I wanted to do - I _don't_ want to make what's returned from patternAnalyzer() directly available to everthing - to be declared "as-is".

> Unlike when we call data from a REST API, and want to make that data available explicitly (or "as-is") to the rest of the app, we don't need patternAnalyzer()'s result(s) only once - we need it twice. In fact, we need to store its result(s) for both strings in seperate variables so that they can be compared.
> I _suppose_ I could have destructured twice:

    let { stringDictionary, stringPattern } = patternAnalyzer(s);
    const string1Pattern = stringPattern
    { stringDictionary, stringPattern } = patternAnalyzer(t);
    const string2Pattern = stringPattern

> but that's _waaaay_ more verbose & unreadable than what I did next (and I'm not even sure it would run) ...
> Since I wanted to compare what was returned from two different strings, I needed to store the results in custom variables:

      const string1Pattern = patternAnalyzer(s).stringPattern;
      const string2Pattern = patternAnalyzer(t).stringPattern;

## What do I need to work on?

I need to write 'sad' paths more often, and possibly earlier-on (if this or that edge case, return out of the function before doing more work). I also need to write these as "if" statements rather than ternary operators.

I also need to make my conditionals more literal (in some cases). In this project, I thought I needed to set a variable (to -1/1 or false/true), and return that variable ... when I could just as easily return that boolean - I think I need more practice using functions + conditionals so I feel better about returning a literal boolean ... it feels wrong ... it feels like I'm returning too little data, currently.

## Where did I get stuck (if any)?

N/A
