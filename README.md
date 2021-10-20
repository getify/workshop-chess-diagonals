# Chess Diagonals

This workshop project explores the algorithmic complexities (speed and memory) of determining which two diagonals (major and minor) on a chessboard to highlight based on which tile in the board is clicked. The spirit of the workshop is to explore the tradeoffs of various optimization strategies.

In standard chessboard terminology, the "major" diagonals go from top-left to bottom-right (aka "northwest" to "southeast"), whereas the "minor diagonals" go from top-right to bottom-left (aka "northeast" to "southwest").

Every tile belongs to exactly two such diagonals. For the 4 corner tiles, one of their diagonals has only that single corner tile in it -- but that's still considered a (albeit trivial) diagonal.

## Workshop Instructions

1. Check out the `start-here` branch.

2. Consult the `app.js` module for the app logic already implemented:

    * Calls `Chessboard.draw(..)` to draw the chessboard.

    * Sets up an event listener for clicks on the board.

    * Calls `Chessboard.highlight(..)` to highlight diagonals for a given tile (DOM element).

3. Now consult the `chessboard.js` module for the algorithm logic to be implemented (look for the `TODO` comments):

    * The `draw(..)` function accepts a root DOM element for the chessboard, and creates the 8 rows and 64 tiles (8 tiles each in row) as child DOM elements (`div`s) inside this root element. According to the needs of your solution, this function may also perform other operations or track other information.

    * The `highlight(..)` function accepts a tile's DOM element (that's been clicked on) and finds all the tiles in its two diagonals (major and minor) to highlight (via a CSS class). If this function is called with no argument, it just clears the previous highlights.

4. When you're ready, or if you get stuck in your own implementation, check out the `option-1`, `option-2`, `option-3`, and `option-4` branches and compare your solution to the ones provided.

## Extra Credit

Develop a test plan and suite of tests to verify the `Chessboard` module's functionality.

## Running the App

The app should be run in a local web server and accessed in a browser such as at `http://localhost:8080` (or whatever port you prefer).

If you have any recent node/npm installed on your system, you can switch into the workshop project directory, and run a command like this:

```cmd
npx http-server ./ -p 8080
```

That should start up a simple static file server in that current working directory and bind it to localhost on the port number as specified.

## Acknowledgments

This particular problem was posed by Suni Puri and others from [devKode](https://devkode.io/), and brought to my attention by his [Linked In post](https://www.linkedin.com/posts/sunnypuri_thedomchallenge-javascript-javascriptdeveloper-activity-6843412337437872128-WwfF), as part of their #TheDOMChallenge event -- a series of exercises designed to prepare candidates for job interviews.

## License

All code and documentation are (c) 2021 Kyle Simpson and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).
