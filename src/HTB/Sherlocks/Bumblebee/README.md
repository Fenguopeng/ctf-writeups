# HTB Sherlocks Bumblebee

题目附件：[下载地址]()

解压密码：`hacktheblue`

[官方 Writeup](./attachments/Sherlocks%20Bumblebee%20Official%20Writeup.pdf)

<https://sqlitebrowser.org/>

## 任务1

> 外部承包商的用户名是什么？

FLAG：`apoole1`

## 任务2

> 承包商使用了哪个 IP 地址创建他们的账户？

FLAG：`10.10.0.78`

## 任务3

> 承包商发布的恶意帖子其 post_id 是多少？

FLAG：`9`

## 任务4

> 凭据窃取程序将其数据发送到的完整 URI 是什么？

FLAG：`http://10.10.0.78/update.php`

## 任务5

> 承包商何时以管理员身份登录论坛？（UTC）

FLAG：`26/04/2023 10:53:12`

## 任务6

> 论坛中存在用于 LDAP 连接的明文凭据，密码是什么？

表 `phpbb_config`

FLAG：`Passw0rd1`

## 任务7

> 管理员用户的 User-Agent 是什么？

过滤管理员的 IP `10.255.254.2`

```
10.255.254.2 - - [25/Apr/2023:12:08:42 +0100] "GET /adm/index.php?sid=ac1490e6c806ac0403c6c116c1d15fa6&i=12 HTTP/1.1" 403 9412 "http://10.10.0.27/adm/index.php?sid=ac1490e6c806ac0403c6c116c1d15fa6&i=1" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
```

FLAG：`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36`

## 任务8

> 承包商在何时将自己添加到管理员组？（UTC）

FLAG：`26/04/2023 10:53:51`

## 任务9

> 承包商在何时下载了数据库备份？（UTC）

```
10.10.0.78 - - [26/Apr/2023:12:01:38 +0100] "GET /store/backup_1682506471_dcsr71p7fyijoyq8.sql.gz HTTP/1.1" 200 34707 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0"
```

FLAG：`26/04/2023 11:01:38`

## 任务10

> 根据 access.log 所述，数据库备份的大小（字节）是多少？

FLAG：`34707`
