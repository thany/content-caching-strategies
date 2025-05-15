This is a [Next.js](https://nextjs.org) project to explore content caching strategies. 

## Running it

### 1. Install packages

```
npm i
```

### 2. Run a static server

```
npm run serve
```

This will make it "visible" what requests the Next.js server is doing.

### 3. Build and start the project

```
npm run build
npm run start
```

This will build and start the project in production mode. This ensures the caching strategy is applied.

## Fiddling

You can start the project in development mode:

```
npm run dev
```

This way any change you make will be immediately visible. But be adviced: content caching strategy is not applied in this mode. Every attempt to do a fetch will bypass the cache. This is useful in development mode (generally speaking), but it's good to be aware of this when you're trying to test the caching strategy.