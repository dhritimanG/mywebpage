import Link from "next/link"
import React from "react"

export default function NavItems() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
