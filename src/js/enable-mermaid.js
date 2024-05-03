/* global mermaid */

// elements with mermaid diagram code
const mermaids = document.querySelectorAll(".mermaid")

mermaids.forEach((element) => {
  // make diagram image visible after processing
  function callback(mutationList, observer) {
    const processedMutation = mutationList.find(
      (mutation) => mutation.attributeName === "data-processed",
    )
    if (processedMutation && processedMutation.target.dataset["processed"]) {
      processedMutation.target.style.visibility = "visible"
      observer.disconnect()
    }
  }
  const observer = new MutationObserver(callback)
  // observe for indication of processed diagram
  observer.observe(element, {
    attributes: true,
    attributesFilter: "data-processed",
  })
})

mermaid.initialize({
  startOnLoad: true,
  theme: "neutral",
  flowchart: {
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
  },
  securityLevel: "loose",
})
