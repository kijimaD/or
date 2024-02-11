```shell
docker build . -t or
docker run --rm -d -v "$PWD/":/work -w /work -p 3002:3002 or bash -c "mdbook serve -p 3002 -n 0.0.0.0"
```
