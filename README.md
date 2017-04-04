# dropPrivileges

Used to drop privileges and switch user/group under which the current nodejs process is running.

## when

If you start your nodejs program as `root` e.g. to acquire privileged tcp ports or read SSL certificates you can use this module to drop root privileges afterwards.

## how

```
const dropPrivileges = require('drop-privileges');

// ...

doSomethingThatRequiresRoot();

// ...

dropPrivileges('unprivileged-user', 'unprivileged-group');

```