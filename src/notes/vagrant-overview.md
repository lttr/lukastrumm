---
title: Vagrant overview
date: 2015-08-23
tags: vagrant
---

[Vagrant Docs](https://docs.vagrantup.com/v2/)

## Initialization

```
vagrant box add SOME_BOX  # downloads base VM
vagrant init SOME_BOX     # creates Vagrantfile with SOME_BOX as VM
```

or if I know which BOX I want:

```
vim Vagrantfile
```

## Start and ssh

```
vagrant up
```

```
vagrant ssh        # log-in using Vagrant
vagrant ssh-config # info for external ssh log-in
```

When configuration in Vagrantfile is changed

```
vagrant reload
```

## Synced folders

`/vagrant` in VM is synced with project root (where the Vagrantfile is)

## Provisioning

Using shell script `bootstrap.sh` in the project root directory.

```
config.vm.provision :shell, path: "bootstrap.sh"
```

Provisioning proceedes:

- first run of `vagrant up`
- `vagrant reload --provision`
- `vagrant provision`

## Networking

Port-forwarding

```
config.vm.network "forwarded_port", guest: 8080, host: 8080
```

## Stopping

`vagrant suspend` -> put to sleep

`vagrant halt` -> shut down

`vagrant destroy` -> remove the VM hard disk
