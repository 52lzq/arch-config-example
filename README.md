# manjaro （xfce版本） 相关配置

## 进度
基本配置正在填写中...

## 安装系统
１.在ｍanjaro官网上选择适合自己的版本进行下载

2.使用Refus制作U盘启动盘，进入Refus界面后选择对应的iso文件，所有选项默认，点击开始后的对话框选择**以dd镜像模式写入**

3.插入启动盘，以启动盘模式启动系统，选择tz(时域)为Asia/Shanghai，lang(语言)可选zh_CN(中文)，driver(驱动)可选nonfree(闭源)驱动  *ps:闭源驱动更加稳定*

4.进入启动盘图形桌面，按照介绍进行安装选择之后重启

## 基本配置

选择国内镜像源(可选择多个镜像源)
~~~ 
  sudo pacman-mirrors -i -c China -m rank
~~~
换源后更新缓存
若此时出现(无法锁定数据库)错误
可删除 /var/lib/pacman/db.lck
 *ps 指令: sudo rm -rf /var/lib/pacman/db.lck*
~~~
sudo pacman -Syy
~~~
配置 pacman.conf  添加archlinuxcn源
~~~
sudo vi /etc/pacman.conf
~~~
在文件最底部
添加
~~~
[archlinuxcn]
SigLevel = Optional TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
~~~
再次更新缓存
~~~
sudo pacman -Syy
~~~
添加kerying 防止安装及更新系统失败
~~~
sudo pacman -S archlinux-keyring
~~~
更新整个系统
*ps:此操作可能需要较长时间*
~~~
sudo pacman -Syu
~~~
安装搜狗输入法
~~~
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S  fcitx-sogoupinyin
~~~
在每个环境下都使用输入法
~~~
vi ~/.xprofile
~~~
添加如下内容
~~~
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
~~~
进行重启 reboot

