wkdvie@wkdvie-LIFEBOOK-E754:/$ sudo find -type f -name '*eruption*' -delete

____________________________
https://www.liquidweb.com/kb/how-to-create-a-software-install-list/

Install software from a text file:
[root@host ~]# xargs -a allthethings.txt apt install

Install software from a text file:
[root@host ~]# apt-get install < allthethings.txt

Further Detail
After reinstalling your base Linux system, copy or upload a copy of the ‘allthethings.txt’ file to your system. Please ensure you have installed the same version of your OS on your new or remote system. Once the file has been copied, install the packages from the allthethings.txt file using one of the above noted commands as the root user. The package manager will install all of the packages listed in the ‘allthethings.txt’ file on your system.
________________

