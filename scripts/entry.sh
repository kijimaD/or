#!/bin/bash
set -eux

#####################
# エントリを作成する
# 例: 202506130916_23
#####################

cd `dirname $0`
cd ../src

timestamp=$(date +"%Y%m%d%H%M")

# 既存の最新番号を取得（形式: YYYYMMDDHHMM_N）
latest_number=$(find . -maxdepth 1 -regextype posix-extended -regex './[0-9]{12}_[0-9]+?\.md' |
    sed -E 's|.*/[0-9]{12}_([0-9]+?)\.md$|\1|' |
    sort -n | tail -n 1)

# 採番
if [[ -z $latest_number ]]; then
  new_number=1
else
  new_number=$((latest_number + 1))
fi

filename="./${timestamp}_${new_number}.md"

# ファイル作成
touch "$filename"
echo "# ORD $new_number: xx" >> "$filename"
cat tmpl.md >> "$filename"

echo "- [ORD $new_number: xx](./$filename)" >> SUMMARY.md
