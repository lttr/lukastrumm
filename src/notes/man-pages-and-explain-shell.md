---
title: Man pages and explain shell
date: 2022-11-22
tags:
  - linux
  - shell
---

- https://explainshell.com/
- https://tldr.sh/
- https://linux.die.net/man/
- https://www.kernel.org/doc/man-pages/
- https://cht.sh/
- https://github.com/troydm/exp (explain shell cli)
- https://github.com/abhagsain/ai-cli (cli for Open API)

## Example

```bash
❯ exp curl -fsSL
curl(1) ---[ transfer a URL ]

-f --------[ -f, --fail
             (HTTP)  Fail  silently  (no  output at all) on server errors. This is mostly done to better enable
             scripts etc to better deal with failed attempts. In normal cases  when  a  HTTP  server  fails  to
             deliver  a  document,  it  returns an HTML document stating so (which often also describes why and
             more). This flag will prevent curl from outputting that and return error 22.
             This method is not fail-safe and there are occasions where non-successful response codes will slip
             through, especially when authentication is involved (response codes 401 and 407). ]

s ---------[ -s, --silent
             Silent or quiet mode. Don't show progress meter or error messages.  Makes Curl mute. ]

S ---------[ -S, --show-error
             When used with -s it makes curl show an error message if it fails. ]

L ---------[ -L, --location
             (HTTP/HTTPS) If the server reports that the requested page  has  moved  to  a  different  location
             (indicated  with  a Location: header and a 3XX response code), this option will make curl redo the
             request on the new place. If used together with -i, --include or  -I,  --head,  headers  from  all
             requested pages will be shown. When authentication is used, curl only sends its credentials to the
             initial host. If a redirect takes curl to a different host, it won't  be  able  to  intercept  the
             user+password.  See  also  --location-trusted  on  how to change this. You can limit the amount of
             redirects to follow by using the --max-redirs option.
             When curl follows a redirect and the request is not a plain GET (for example POST or PUT), it will
             do  the  following  request  with a GET if the HTTP response was 301, 302, or 303. If the response
             code was any other 3xx code, curl will re-send the following request  using  the  same  unmodified
             method. ]


❯ ai ask "transfer a url, follow redirects, be silent, show errors and fail silently"
...
> Command is `curl -s -L --show-error --fail <URL>`
```
