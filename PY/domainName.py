def domain_name(url):
    while "www" in url or "//" in url:
        url = url.lstrip('htps:w')
        url = url.lstrip('/.')
    while "." in url:
        url = url.rstrip('qwertyuiopasdfghjklzxcvbnm/')
        url = url.rstrip('.')
    return url

    # Write a function that when given a URL as a string,
    # parses out just the domain name and returns it as a string.
    # For example:
    # domain_name("http://github.com/carbonfive/raygun") == "github"
    # domain_name("http://www.zombie-bites.com") == "zombie-bites"
    # domain_name("https://www.cnet.com") == "cnet"

print(domain_name("www.google.ca"))