# arch-i3 配置

## 进度

基本配置正在填写中...

## 基本配置

- 在 mirrorlist 添加清华镜像源

```
 sudo vim /etc/pacman.d/mirrorlist
```

- 安装 vim

```
pacman -S vim
```

- 安装 markdown 编辑器

```
pacman -S typora
```

添加下述语句在文件最上层

```
  Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

- 配置 pacman.conf 添加 archlinuxcn 源

```
  sudo vim /etc/pacman.conf
```

在文件最底部
添加

```
[archlinuxcn]
SigLevel = Optional TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

将文件底部三个 arcolinux_repo 的源先注释掉
再次更新缓存

```
sudo pacman -Syy
```

- 添加 kerying 防止安装及更新系统失败

```
sudo pacman -S archlinux-keyring archlinuxcn-keyring
```

- 更新整个系统
  \_PS:此操作可能需要较长时间

```
sudo pacman -Syu
```

- 安装 yay AUR 助手

```
sudo pacman -S yay
```

- 安装搜狗输入法

```
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S  fcitx-sogoupinyin
```

在每个环境下都使用输入法

```
vim ~/.xprofile
```

添加如下内容

```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

进行重启 reboot

如果搜狗输入法频繁出现请删除 xx，则可以安装 fcitx-qt4 来修复搜狗输入法

```
yay -S fcitx-qt4
```

安装完搜狗输入法后可以配置翻墙资源，我采用的是 ssr 节点形式

- 安装 chromium

```
sudo pacman -S google-chrome-stable
```

- 安装 electron-netease-cloud-music

```
pacman -S electron-netease-cloud-music
```

- 安装 wps 和 wps 字体

```
pacman -S ttf-wps-fonts wps-office
```

- 更新字体缓存

```
fc-cache -fv
```

- 安装 ttf-menlo-powerline-git

```
yay -S ttf-menlo-powerline-git
```

指定安装 google-chrome-stable 在代理端口下运行以便运行安装 chromium 的代理插件`Proxy SwitchyOmega`

```
google-chrome-stable --proxy-server="socks5://127.0.0.1:1080"
```

PS:这里贴上`Proxy SwitchyOmega`插件的规则配置资源网址

```
https://github.com/FelisCatus/SwitchyOmega/wiki/GFWList
```

此时可以按照自己喜欢设置系统，有一个痛点就是在高分辨率屏幕下字体十分小，可以在设置字体处将字体 dpi 设置的较高一点。

- 安装 vscode

```
sudo pacman -S visual-studio-code-bin
```

此时下载完 vscode 可以同步 vscode 设置
在插件列表中下载 Settings Sync

按下 Shift + Alt + D  
输入 token 在打开的页面中可重复生成 token
然后查询到自己保存的 github gist 进行同步更新

如果你是第一次使用此插件还没有在 github 上保存过 vscode 的设置，可按照下述步骤将当前设置同步保存上去

```
登陆插件，选择对应的github gist
```

安装 aur 上的 blueman-git

```
sudo pacman -Rs blueman
yay -S blueman-git
```

-避免每次提交 github 输入密码

```
git config --global credential.helper store
```

- 显示 emoji

```
sudo pacman -S noto-fonts-emoji
```

然后修改全局字体配置文件

```
vim ~/.config/fontconfig
```

添加

```
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
```

- 安装 zsh

```
sudo pacman -S zsh
```

此时可以用`cat /etc/shells`查看所有 shell

更改默认 shell 为 zsh`chsh -s /usr/bin/zsh`

可以用`echo $SHELL`查看当前默认的 shell

- 安装 oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

我安装不是 zsh 默认含有的主题，地址在 git 上，故`git clone https://github.com/caiogondim/bullet-train.zsh`,将下载的主题放置于~/.oh-my-zsh/themes/bullet-train.zsh-theme

- 安装插件
  高亮插件

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

命令建议和补全

```
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

此时可以更改 `~/.zshrc`找到并更改`ZSH_THEME="bullet-train"`更改`plugins=(git zsh-syntax-highlighting zsh-autosuggestions)`

在命令行输入`source ~/.zshrc`以生效
