const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");
  
describe( "#findMedian", () =>
{
    it( "finds the median of an even set", () =>
    {
        expect( findMedian( [ 1, -1, 4, 2 ] ) ).toEqual( 1.5 )
    } );
    it( "finds the median of an odd set", () =>
    {
        expect( findMedian( [ 1, -1, 4 ] ) ).toEqual( 1 )
    } );
} );
  
describe( "#findMean", () =>
{
    it( "finds the mean of an empty array", () =>
    {
        expect( findMean( [] ) ).toEqual( 0 )
    } );
    it( "finds the mean of an array of numbers", () =>
    {
        expect( findMean( [ 1, -1, 4, 2 ] ) ).toEqual( 1.5 )
    } );
} );
  
describe( "#findMode", () =>
{
    it( "finds the mode", () =>
    {
        expect( findMode( [ 1, 1, 1, 2, 2, 3 ] ) ).toEqual( 1 )
    } );
} );