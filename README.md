# Martian Quote Generator Mixmax app

This is an open source Mixmax Slash Command. See "Build a Slash Command" under <http://sdk.mixmax.com> for more information about building slash commands.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:

```
curl http://localhost:9556/typeahead?text=cats
```

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9556/resolver?text=cats
```
