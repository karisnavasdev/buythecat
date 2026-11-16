import re
p = r"C:\Users\Vector\Downloads\buythecat.win\buythecat.win\index.html"
html = open(p, encoding="utf-8").read()
print("len", len(html))
for key in ["chart.title", "id=\"chart\"", "chart-embed", "Heartbeat", "holders"]:
    i = 0
    n = 0
    while True:
        j = html.find(key, i)
        if j < 0:
            break
        n += 1
        s = max(0, j - 200)
        e = min(len(html), j + 400)
        print("\n===", key, n, "at", j, "===")
        print(html[s:e])
        i = j + len(key)
        if n >= 3:
            break
    if n == 0:
        print("\n===", key, "NOT FOUND ===")
