`yarn install`

`yarn run build`

**expected output**:

```
body { }
  body .black {
    background-color: black; }
  body .red {
    background-color: red; }

```

**actual output**:
```
.red {
    background-color: red
}

body { }
  body .black {
    background-color: black; }

```