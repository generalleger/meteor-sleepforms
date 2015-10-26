# sleepForMs

## Add To Your Project
Add it to your project with `meteor add generalledger:sleepforms`.

## About
Meteor has a handy method that is invoked with `Meteor._sleepForMs(timeInMilliseconds)`. It essentially pauses execution for a period of time that you specify.

Unfortunately, it is only available on the server.  This simple little package makes it available on the client as well.

## Usage Example
```
Meteor._sleepForMs(1000); //pause execution for one second
```

MIT License
