## Start
```
npm init -y
npm install typescript --save-dev
npx tsc --version
```
create tsconfig.json 
```
npx tsc --init
```
uncomment the output directory in tsconfig.json
```
  "outDir": "./dist", 
```
```
  "module": commonjs", 
  "rootDir": "./src",   
```
then 
```
npx tsc
npx tsc --watch
```
and run our js
```
node dist/products/main.js
```

## More


to execute a ts we can use ts-node
```
npm install -D ts-node
```
```
npx ts-node src/products/main.ts
```


we can use quicktype to type a json or more formats
