const express = require( 'express' );
app = express();
const ExpressError = require( './expressError' );

const { converAndValidateNumsArray, findMode, findMean, findMedian } = require( './helpers' );

app.get( '/mean', ( req, res, next ) =>
{
    if ( !req.query.nums )
    {
        throw new ExpressError( 'You must pass a query keys of numbers with a comma to separated list of numbers.', 400 )
    }
    let numsAsStrings = req.query.nums.split( ',' );
    //check if anything bad was put in
    let nums = converAndValidateNumsArray( numsAsStrings );
    if ( nums instanceof Error )
    {
        throw new ExpressError( nums.message );
    }

    let result = {
        operation: "mean",
        result: findMean( nums )
    }

    return res.send( result );
} );

app.get( '/median', ( req, res, next ) =>
{
    if ( !req.query.nums )
    {
        throw new ExpressError( 'You must pass a query keys of numbers with a comma to separated list of numbers.', 400 )
    }
    let numsAsStrings = req.query.nums.split( ',' );
    //check if anything bad was put in
    let nums = converAndValidateNumsArray( numsAsStrings );
    if ( nums instanceof Error )
    {
        throw new ExpressError( nums.message );
    }
    let result = {
        operation: "median",
        result: findMedian( nums )
    }

    return res.send( result )
    
} );

app.get( '/mode', ( req, res, next ) =>
{
    if ( !req.query.nums )
    {
        throw new ExpressError( 'You must pass a query keys of numbers with a comma to separated list of numbers.', 400 )
    }
    let numsAsStrings = req.query.nums.split( ',' );
    //check if anything bad was put in
    let nums = converAndValidateNumsArray( numsAsStrings );
    if ( nums instanceof Error )
    {
        throw new ExpressError( nums.message );
    }
    
    let result = {
        operation: "mode",
        result: findMode( nums )
    }

    return res.send( result )
    
} );


//general error handler

app.use( ( req, res, next ) =>
{
    const err = new ExpressError( "Not Found", 404 );

    //pass the error to the next piece of middleware
    return next( err );
} );

app.use( ( err, req, res, next ) =>
{
    res.status( err.status || 500 );

    return res.json( {
        error: err,
        message: err.message
    } );
} );



app.listen( 3000, () =>
{
    console.log( "Server running on port 3000" )
} );
    
