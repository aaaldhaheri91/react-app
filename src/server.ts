import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

const NODE_ENV: string | undefined = process.env.NODE_ENV;
const serveApp: string = NODE_ENV === 'development' ? '../build/src' : './';

app.use(express.static(path.join(__dirname, serveApp)));

// define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world! this is ahmed aldhaheri just changed file" );
// } );

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, serveApp, 'index.html'));
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );