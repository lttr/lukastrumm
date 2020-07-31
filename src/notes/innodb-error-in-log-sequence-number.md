---
title: InnoDB Error in log sequence number
date: 2015-05-05
tags: mysql
---

**Solution for InnoDB Error in log sequence number**

## Symptoms

During database start:

```
150505 13:00:59  InnoDB: Error: page 826 log sequence number 7109491670
InnoDB: is in the future! Current system log sequence number 140821129.
InnoDB: Your database may be corrupt or you may have copied the InnoDB
InnoDB: tablespace but not the InnoDB log files. See
InnoDB: http://dev.mysql.com/doc/refman/5.5/en/forcing-innodb-recovery.html
InnoDB: for more information.
```

During execution of ddl script:

```
Table '.\mysql\proc' is marked as crashed and should be repaired
```

## Solution

This executed on command line helped (2015-05-05)

```
mysqlcheck --repair --all-databases
```

This my be helpful too.

```
REPAIR TABLE mysql.proc;
```
