import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-[#7d7d7d] py-4">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-[#1a1a1a] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#004127] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
