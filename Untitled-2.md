安装后的事情


===

#H1 http://azraelgreen.ml/blog/2019/05/12/manjaro-configure/

订阅
https://sub.ssocksage.club/link/O7hlgrpnyI0zX0Qq?mu=0

:: 正在同步软件包数据库...
错误：无法升级 core (无法锁定数据库)
  如果你确认软件包管理器没有在运行，
  你可以删除 /var/lib/pacman/db.lck
  sudo rm -rf /var/lib/pacman/db.lck

sudo pacman-mirrors -i -c China -m rank  选择


若出现无法挂载Ｕ盘情况
sudo mount /dev/sdb4 /mnt/usb
sudo umount /mnt/usb


测试速度
sudo pacman -Syy

配置pacman.conf 添加archlinuxcn源

sudo vi /etc/pacman.conf

~~~js
[archlinuxcn]
SigLevel = Optional TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
~~~

测试速度
sudo pacman -Syy
添加 kerying 
sudo pacman -S archlinux-keyring

更新整个系统

sudo pacman -Syu
安装输入法
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S  fcitx-sogoupinyin

使在每个环境下都使用 fcitx

vi ~/.xprofile

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"

重启 reboot

git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

修复搜狗输入法
yay -S fcitx-qt4



安装完输入法之后 配置翻墙

curl ip.gs

下载ssr linux 通用版

字体模糊
~~~html
 <?xml version="1.0"?>
 <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
 <fontconfig>
     <match target="font">
         <edit name="autohint" mode="assign">
             <bool>false</bool>
             </edit>
         <edit name="hinting" mode="assign">
            <bool>false</bool>
        </edit>
        <edit name="hintstyle" mode="assign">
            <const>none</const>
        </edit>
    </match>
</fontconfig>
~~~

安装 remarkable  md编辑工具
yay -S remarkable

安装 zsh
sudo pacman -S zsh

设置默认shell 
sudo vim /etc/passwd
chsh -s /bin/zsh
cat /etc/shells
echo $SHELL

安装on my zsh 
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

git clone https://github.com/caiogondim/bullet-train.zsh
安装 主题
放置/home/zq/.oh-my-zsh/themes/bullet-train.zsh-theme

安装插件
zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
plugins=(其他的插件 zsh-syntax-highlighting)

git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
plugins=(其他的插件 zsh-autosuggestions)

source ~/.zshrc
安装字体
###地址https://github.com/powerline/fonts (可能需copy到位置  并执行命令)
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts

#查看所有安装的字体
fc-list|cut -d: -f2
#更新字体缓存
fc-cache -fv 

#安装 powerline-vim
sudo pacman -S powerline-vim
vim ~/.vimrc
配置
~~~js
let g:powerline_pycmd="py3"
set laststatus=2
set t_Co=256
syntax on
~~~

sudo pacman -S visual-studio-code-bin

下载 Settings Sync

Shift + Alt + D 
输入 token 可重复生成
再查询到 github gist

解决vscode中的终端zsh主题显示问题

然后选择字体 我选择的是 kde 情况下 Droid Sans Mono for Powerline

vscode终端选择　 Menlo for Powerline

安装chrome
sudo pacman -S google-chrome 

命令在端口执行
google-chrome-stable --proxy-server="socks5://127.0.0.1:1080"

清除系统中无用的包
sudo pacman -R $(pacman -Qdtq)
 
清除已下载的安装包
sudo pacman -Scc



