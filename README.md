```shell
docker build . -t test
docker run --rm -d -v "$PWD/":/work -w /work -p 3002:3002 test bash -c "mdbook serve -p 3002 -n 0.0.0.0"
```
