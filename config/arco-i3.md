# arch-i3 配置

## 进度
基本配置正在填写中...

## 基本配置
- 在mirrorlist添加清华镜像源 
~~~
 sudo vim /etc/pacman.d/mirrorlist
~~~
添加下述语句在文件最上层
~~~
  Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
~~～
- 配置 pacman.conf  添加archlinuxcn源
~~~
  sudo vim /etc/pacman.conf
~~~
在文件最底部
添加
~~~
[archlinuxcn]
SigLevel = Optional TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
~~~
将文件底部三个arcolinux_repo的源先注释掉
再次更新缓存
~~~
sudo pacman -Syy
~~~
- 添加kerying 防止安装及更新系统失败
~~~
sudo pacman -S archlinux-keyring archlinuxcn-keyring
~~~
- 更新整个系统
*PS:此操作可能需要较长时间*
~~~
sudo pacman -Syu
~~~
- 安装yay AUR助手
~~~
sudo pacman -S yay
~~~
- 安装搜狗输入法
~~~
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S  fcitx-sogoupinyin
~~~
在每个环境下都使用输入法
~~~
vim ~/.xprofile
~~~
添加如下内容
~~~
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
~~~
进行重启 reboot

如果搜狗输入法频繁出现请删除xx，则可以安装fcitx-qt4来修复搜狗输入法
~~~
yay -S fcitx-qt4
~~~
安装完搜狗输入法后可以配置翻墙资源，我采用的是ssr节点形式

- 安装chromium
~~~
sudo pacman -S 安装chromium
~~~

指定安装chromium在代理端口下运行以便运行安装chromium的代理插件`Proxy SwitchyOmega`
~~~
chromium --proxy-server="socks5://127.0.0.1:1080"
~~~

PS:这里贴上`Proxy SwitchyOmega`插件的规则配置资源网址
~~~
https://github.com/FelisCatus/SwitchyOmega/wiki/GFWList
~~~

此时可以按照自己喜欢设置系统，有一个痛点就是在高分辨率屏幕下字体十分小，可以在设置字体处将字体dpi设置的较高一点。

- 安装vscode
~~~
sudo pacman -S visual-studio-code-bin
~~~
此时下载完vscode可以同步vscode设置
在插件列表中下载Settings Sync

按下 Shift + Alt + D  
输入token 在打开的页面中可重复生成token
然后查询到自己保存的github gist 进行同步更新

如果你是第一次使用此插件还没有在github上保存过vscode的设置，可按照下述步骤将当前设置同步保存上去

1. 下载完插件，按下Shift + Alt + U，*PS:如果未生效，请重启vscode或者打开一个文件*在跳出的页面点击 generate new tooken，然后在新的页面里写上token描述，勾选上gist，此时就会生成一个token,输入到vscode输入框中

2. 上传完成后会生成一个gist ID,使用 Shift + Alt + D，输入ID，进行同步，如果ID忘了或者没找到？可以在google一下github gists 然后登陆账号就可以查看到自己所有生成的gists，在对应的那个点击进去的url后缀就是对应的ID

3. 其实在我理解token是相当于判断当前用户属于谁，后面的gists ID是指当前用户底下的哪条gists信息

~~~
sudo pacman -Rs blueman
~~~
安装aur上的blueman-git
~~~
yay -S blueman-git
~~~

-避免每次提交github输入密码
~~~
git config --global credential.helper store
~~~

- 显示emoji
~~~
sudo pacman -S noto-fonts-emoji
~~~
然后修改全局字体配置文件
~~~
vim ~/.config/fontconfig
~~~
添加
~~~
<match target="scan">
  <test name="family">
    <string>Noto Color Emoji</string>
  </test>
  <edit name="scalable" mode="assign">
    <bool>true</bool>
  </edit>
</match>

<match target="pattern">
  <edit name="family" mode="prepend">
    <string>Noto Color Emoji</string>
  </edit>
</match>
~~~