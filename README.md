```shell
docker build . -t or
docker run --rm -d -v "$PWD/":/work -w /work -p 3002:3002 --name or-server or bash -c "mdbook serve -p 3002 -n 0.0.0.0"
```

## 作成規約

エントリを追加する。

```shell
$ ./scripts/entry.sh
```

説明を示すためにfigureタグを使う。

```
<figure>
  <img src="..." width="600">
  <figcaption>...</figcaption>
</figure>
```
