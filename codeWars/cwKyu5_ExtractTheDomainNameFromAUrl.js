// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  let filter = ''
  if (url.includes('www.')) {
    filter = url.split('.')[1]
  } else {
    if (url.includes('http')) {
      filter = url.split('//')[1]
    } else {
      filter = url.split('.')[0]
    }
    if (filter.includes('.')) filter = filter.split('.')[0]
  }
  return filter
}