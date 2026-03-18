import fs from "fs"
import path from "path"

const docsRoot = path.resolve(__dirname, "..")

const IGNORED_FOLDERS = [
  "node_modules",
  ".vitepress",
  ".git",
  "dist",
  "images"
]

function formatName(name) {
  return name
    .replace(/^\d+_/, "")     // usuwa 01_
    .replace(".md", "")
    .replace(/_/g, " ")
}

function scanDir(dir, base = "") {

  const fullPath = path.join(docsRoot, dir)
  const entries = fs.readdirSync(fullPath)

  const items = []

  for (const entry of entries) {

    if (IGNORED_FOLDERS.includes(entry)) continue

    if (entry.startsWith(".")) continue

    const entryPath = path.join(fullPath, entry)
    const stat = fs.statSync(entryPath)

    if (stat.isDirectory()) {

      items.push({
        text: formatName(entry),
        collapsed: false,
        items: scanDir(
          path.join(dir, entry),
          path.join(base, entry)
        )
      })

    } else if (entry.endsWith(".md") && entry !== "index.md") {

      items.push({
        text: formatName(entry),
        link: `/${path.join(dir, entry.replace(".md", ""))}`
      })

    }
  }

  return items.sort((a, b) => a.text.localeCompare(b.text))
}

export function generateSidebar() {

  const folders = fs.readdirSync(docsRoot)
  .filter(file => {

    if (IGNORED_FOLDERS.includes(file)) return false

    const stat = fs.statSync(path.join(docsRoot, file))

    return stat.isDirectory()
  })

  return folders.map(folder => ({
    text: formatName(folder),
    collapsed: false,
    items: scanDir(folder)
  }))

}